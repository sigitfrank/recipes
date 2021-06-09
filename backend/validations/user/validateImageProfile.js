import multer from 'multer'
import fs from 'fs'

import formatFilename from '../../helpers/formatFilename.js'
const validateImageProfile = () => {
    const storage = multer.diskStorage({
        destination: (req, file, callback) => {
            let dirProfile = `./public/uploads/images/profile/${req.user.userData._id}`;
            if (!fs.existsSync(dirProfile)) {
                fs.mkdirSync(dirProfile);
            }
            callback(null, dirProfile)
        },
        filename: (req, file, callback) => {
            formatFilename(callback, file, 'profile', req.user.userData._id)
        },
    })
    return multer({
        storage: storage,
        limits: {
            fileSize: 1024 * 1024, //1mb
        },
        fileFilter: (req, file, cb) => {
            const mimetypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/JPEG', 'image/JPG', 'image/PNG']
            if (!mimetypes.includes(file.mimetype)) {
                cb(null, false)
                return cb({ message: 'File extension must be jpg, jpeg, or png' })
            }
            cb(null, true)
        }
    }).single('image')
}

export default validateImageProfile