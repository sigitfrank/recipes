import multer from 'multer'
import formatFilename from '../../helpers/formatFilename.js'
const validateImageProfile = () => {
    const storage = multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, './public/uploads/images')
        },
        filename: (req, file, callback) => {
            formatFilename(callback, file)
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