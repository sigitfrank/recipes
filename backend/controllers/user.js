import USER from '../models/User.js'

export const getUsers = (req, res) => {
    USER.find({}, (err, users) => {
        if (err) return res.status(200).json({ success: false, msg: 'Something wrong' })
        return res.status(200).json({ success: true, users: users })
    })
}

export const deleteUser = (req, res) => {
    const { id } = req.params
    USER.findOneAndDelete({ _id: id }, (error, user) => {
        if (error) return res.status(200).json({ success: false, msg: `User failed to delete ${error}` })
        if (!user) return res.status(200).json({ success: false, msg: `User does not exist` })
        return res.status(201).json({ success: true, msg: 'User deleted Successfully', user })
    })
}