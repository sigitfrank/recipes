import USER from '../models/User.js'
import bcrypt from 'bcrypt'

export const createUser = (req, res) => {
    const { name, email, password } = req.body

    const registerUser = async () => {
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new USER({
            name,
            email,
            password: hashedPassword,
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
    USER.findOneAndRemove({ _id: id }, (error, user) => {
        if (error)
            return res.status(400).json({ success: false, msg: `User failed to delete ${error}` })
        if (!user)
            return res.status(400).json({ success: false, msg: `User does not exist` })
        return res.status(201).json({ success: true, msg: 'User deleted Successfully', user })
    })
}