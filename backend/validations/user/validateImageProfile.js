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
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: 1024 * 1024, //1mb
        },
    })

    // error handling not yet
    return upload
}

export default validateImageProfile