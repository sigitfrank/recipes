import bcrypt from 'bcrypt'
import USER from '../models/User.js'
import { todayTime } from '../helpers/getMoment.js'
import getRandomString from '../helpers/generateRandomString.js'
import sendEmail from '../helpers/email/sendEmailRegister.js'
import { getExpiredTime } from '../helpers/getTime.js'
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
        })
        return newUser.save().then(user => {
            res.status(201).json({ success: true, msg: 'User Created Successfully', user })
        }).catch(error => {
            res.status(400).json({ success: false, msg: `User failed to create ${error}` })
        })
    }
    registerUser()
}

export const activateUser = (req, res) => {
    const { email, token } = req.params

    const activateUserAccount = async () => {
        const filter = { email, token }
        const update = { email_verified_at: todayTime() }
        const isUserActivated = await USER.findOneAndUpdate(filter, update, { new: true })
        if (!isUserActivated) return res.status(400).json({ success: false, msg: 'Account failed to activate' })
        return res.status(201).json({ success: true, msg: 'Account activated successfully' })
    }
    activateUserAccount()
}

export const reSendEmailToActivateAccount = (req, res) => {
    const { name, email } = req.body

    const token = `${getRandomString(8)}&${getExpiredTime(1)}`
    const updateUserToken = async () => {

        const user = await USER.findOne({ email })
        const isEmailAlreadyVerified = user.email_verified_at
        if (isEmailAlreadyVerified) return res.status(200).json({ success: false, msg: 'Email is already verified' })

        const filter = { email }
        const update = { token }
        const updateToken = await USER.findOneAndUpdate(filter, update, { new: true })
        if (!updateToken) return res.status(400).json({ success: false, msg: 'Email account verification failed to send' })
        sendEmail({ name, email, token })
        return res.status(200).json({ success: true, msg: 'Email account verification has been sent!' })
    }
    updateUserToken()
}

export const deleteUser = (req, res) => {
    const { id } = req.params
    USER.findOneAndDelete({ _id: id }, (error, user) => {
        if (error) return res.status(400).json({ success: false, msg: `User failed to delete ${error}` })
        if (!user) return res.status(400).json({ success: false, msg: `User does not exist` })
        return res.status(201).json({ success: true, msg: 'User deleted Successfully', user })
    })
}
