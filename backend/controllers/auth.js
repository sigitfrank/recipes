import bcrypt from 'bcrypt'
import USER from '../models/User.js'
import todayTime from '../helpers/getTodayTime.js'
import getRandomString from '../helpers/generateRandomString.js'
import sendEmail from '../helpers/email/sendEmailRegister.js'
import { currentTime, getExpiredTime } from '../helpers/getExpiredTime.js'
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

export const deleteUser = (req, res) => {
    const { id } = req.params
    USER.findOneAndDelete({ _id: id }, (error, user) => {
        if (error) return res.status(400).json({ success: false, msg: `User failed to delete ${error}` })
        if (!user) return res.status(400).json({ success: false, msg: `User does not exist` })
        return res.status(201).json({ success: true, msg: 'User deleted Successfully', user })
    })
}

export const activateUser = (req, res) => {
    const { email, token } = req.params

    const getUserActivated = async () => {

        const user = await USER.findOne({ email: email })
        const expiredTime = user.token.split('&')[1]
        if (currentTime() > +expiredTime) return res.status(400).json({ success: false, msg: 'Link has been expired' })

        const filter = { email: email, token: token }
        const update = { email_verified_at: todayTime }
        const isUserActivated = await USER.findOneAndUpdate(filter, update, { new: true })
        if (isUserActivated) return res.status(201).json({ success: true, msg: 'Account activated successfully' })
        return res.status(400).json({ success: false, msg: 'Account failed to activate' })
    }
    getUserActivated()
}

// make route reSend email if link expired