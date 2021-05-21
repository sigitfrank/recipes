import bcrypt from 'bcrypt'
import USER from '../models/User.js'
import { todayTime } from '../helpers/getMoment.js'
import getRandomString from '../helpers/generateRandomString.js'
import sendEmail from '../helpers/email/sendEmailRegister.js'
import { getExpiredTime } from '../helpers/getTime.js'
import { currentTime } from '../helpers/getTime.js'
export const createUser = (req, res) => {
    const { name, email, password } = req.body
    const token = `${getRandomString(8)}&${getExpiredTime(1)}`
    sendEmail({ name, email, token })
    const registerUser = async () => {
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new USER({
            name,
            email,
            email_verified_at: null,
            password: hashedPassword,
            token,
            googleId: null,
            facebookId: null
        })
        return newUser.save().then(user => {
            res.status(201).json({ success: true, msg: 'User Created Successfully. Please check your email to activate your account', user })
        }).catch(error => {
            res.status(200).json({ success: false, msg: `User failed to create ${error}` })
        })
    }
    registerUser()
}

export const activateUser = (req, res) => {
    const { email, token } = req.body

    const activateUserAccount = async () => {
        const filter = { email, token }
        const update = { email_verified_at: todayTime() }

        const user = await USER.findOne({ email })
        if (!user) return res.status(200).json({ success: false, msg: 'User with this email does not exist' })
        if (user.email_verified_at) return res.status(200).json({ success: false, msg: 'User with this email is activated. Please login into your account' })
        const expiredTime = user.token.split('&')[1]
        if (currentTime() > +expiredTime) return res.status(200).json({ success: false, msg: 'Link has been expired' })

        const isUserActivated = await USER.findOneAndUpdate(filter, update, { new: true })
        if (!isUserActivated) return res.status(200).json({ success: false, msg: 'Account failed to activate' })
        return res.status(201).json({ success: true, msg: 'Account activated successfully' })
    }
    activateUserAccount()
}

export const reSendEmailToActivateAccount = (req, res) => {
    const { email } = req.body

    const token = `${getRandomString(8)}&${getExpiredTime(1)}`
    const updateUserToken = async () => {

        const user = await USER.findOne({ email })
        if (!user) return res.status(200).json({ success: false, msg: 'User with this email does not exist' })
        const isEmailAlreadyVerified = user.email_verified_at
        if (isEmailAlreadyVerified) return res.status(200).json({ success: false, msg: 'Email is already verified' })
        const name = user.name
        const filter = { email }
        const update = { token }
        const updateToken = await USER.findOneAndUpdate(filter, update, { new: true })
        if (!updateToken) return res.status(200).json({ success: false, msg: 'Email account verification failed to send' })
        sendEmail({ name, email, token })
        return res.status(200).json({ success: true, msg: 'Email account verification has been sent!' })
    }
    updateUserToken()
}

export const login = (req, res) => {
    const { email, password } = req.body

    const userLogin = async () => {
        const user = await USER.findOne({ email })
        const validatePassword = await bcrypt.compare(password, user.password)
        if (!validatePassword) return res.status(200).json({ success: false, msg: 'Password is incorrect, please try again.' })
        req.session.user = { _id: user._id, name: user.name, email: user.email }
        return res.status(200).json({ success: true, isLoggedIn: true, msg: 'You are logged in', userData: { _id: user._id, name: user.name, email: user.email } })
    }

    userLogin()
}

export const getUserLogin = (req, res) => {
    if (!req.session.user) return res.status(200).json({ success: false, msg: 'You are not logged in. Please login first' })
    return res.status(200).json({ success: true, isLoggedIn: true, msg: 'You are logged in', userData: req.session.user })
}

export const loginWithGoogle = (req, res) => {
    const { name, email, googleId, accessToken } = req.body
    const token = `${getRandomString(8)}&${getExpiredTime(1)}`
    const registerUser = async () => {
        const user = await USER.findOne({ email })
        if (user) {
            const filter = { email }
            const update = {
                name,
                email,
                email_verified_at: currentTime(),
                password: accessToken,
                token,
                googleId,
                facebookId: null
            }
            const updateUser = USER.findOneAndUpdate(filter, update, { new: true })
            if (!updateUser) return res.status(200).json({ success: false, msg: `Login with google failed` })
            return res.status(201).json({ success: true, msg: 'User updated Successfully. Automatically login with google', user })
        }

        const newUser = new USER({
            name,
            email,
            email_verified_at: currentTime(),
            password: accessToken,
            token,
            googleId,
            facebookId: null
        })
        return newUser.save().then(user => {
            res.status(201).json({ success: true, msg: 'User Created Successfully. Automatically login with google', user })
        }).catch(error => {
            res.status(200).json({ success: false, msg: `Login with google failed: ${error}` })
        })
    }
    registerUser()
}

export const loginWithFacebook = (req, res) => {
    const { name, email, facebookId, accessToken } = req.body
    const token = `${getRandomString(8)}&${getExpiredTime(1)}`
    const registerUser = async () => {
        const user = await USER.findOne({ email })
        if (user) {
            const filter = { email }
            const update = {
                name,
                email,
                email_verified_at: currentTime(),
                password: accessToken,
                token,
                googleId: null,
                facebookId
            }
            const updateUser = USER.findOneAndUpdate(filter, update, { new: true })
            if (!updateUser) return res.status(200).json({ success: false, msg: `Login with facebook failed` })
            return res.status(201).json({ success: true, msg: 'User updated Successfully. Automatically login with facebook', user })
        }

        const newUser = new USER({
            name,
            email,
            email_verified_at: currentTime(),
            password: accessToken,
            token,
            googleId: null,
            facebookId
        })
        return newUser.save().then(user => {
            res.status(201).json({ success: true, msg: 'User Created Successfully. Automatically login with facebook', user })
        }).catch(error => {
            res.status(200).json({ success: false, msg: `Login with facebook failed: ${error}` })
        })
    }
    registerUser()
}


export const deleteUser = (req, res) => {
    const { id } = req.params
    USER.findOneAndDelete({ _id: id }, (error, user) => {
        if (error) return res.status(200).json({ success: false, msg: `User failed to delete ${error}` })
        if (!user) return res.status(200).json({ success: false, msg: `User does not exist` })
        return res.status(201).json({ success: true, msg: 'User deleted Successfully', user })
    })
}