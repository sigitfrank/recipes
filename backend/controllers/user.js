import { unlink } from 'fs/promises';
import generateAccessToken from '../middleware/generateAccessToken.js';
import USER from '../models/User.js'
import validateImageProfile from '../validations/user/validateImageProfile.js'
export const getUsers = (req, res) => {
    USER.find({}, (err, users) => {
        if (err) return res.status(200).json({ success: false, msg: 'Something wrong' })
        return res.status(200).json({ success: true, users: users })
    })
}
export const updateUser = (req, res) => {
    const { _id, name } = req.body
    const validateImage = validateImageProfile()
    validateImage(req, res, (err) => {

        if (err) return res.status(400).json({ success: false, msg: err })
        const updateProfile = async () => {
            const user = await USER.findById(_id)
            let imageUrl = user.imageUrl
            if (req.file) {
                imageUrl = req.file.filename
                if (user.imageUrl)
                    await unlink(`./public/uploads/images/${user.imageUrl}`)
            }
            const filter = { _id: _id }
            const update = { name, imageUrl }

            const isProfileUpdated = await USER.findOneAndUpdate(filter, update, { new: true })
            if (!isProfileUpdated) return res.status(400).json({ success: false, msg: "Profile failed to update!" })
            const userData = { _id: isProfileUpdated._id, name: isProfileUpdated.name, email: isProfileUpdated.email, imageUrl: isProfileUpdated.imageUrl, googleId: isProfileUpdated.googleId, facebookId: isProfileUpdated.facebookId, createdAt: isProfileUpdated.createdAt }

            const userAccessToken = generateAccessToken({ userData })

            return res.status(200).json({ success: true, msg: "Profile Updated!", accessToken: userAccessToken })
        }
        updateProfile()
    })

}

export const deleteUser = (req, res) => {
    const { id } = req.params
    USER.findOneAndDelete({ _id: id }, (error, user) => {
        if (error) return res.status(200).json({ success: false, msg: `User failed to delete ${error}` })
        if (!user) return res.status(400).json({ success: false, msg: `User does not exist` })
        return res.status(201).json({ success: true, msg: 'User deleted Successfully', user })
    })
}