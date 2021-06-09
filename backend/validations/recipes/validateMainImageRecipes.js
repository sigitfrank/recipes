import multer from 'multer'
import fs from 'fs'
import formatFilename from '../../helpers/formatFilename.js'

const validateMainImageRecipes = () => {
    const storage = multer.diskStorage({
        destination: (req, file, callback) => {
            const dirRecipesUser = `./public/uploads/images/recipes/${req.user.userData._id}`
            if (!fs.existsSync(dirRecipesUser)) {
                fs.mkdirSync(dirRecipesUser)
            }
            callback(null, dirRecipesUser)
        },
        filename: (req, file, callback) => {
            formatFilename(callback, file, 'recipes', req.user.userData._id)
        },
    })
    return multer({
        storage: storage,
        limits: {
            fileSize: 1024 * 1024, //1mb
        },
        fileFilter: (req, file, callback) => {
            const mimetypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/JPEG', 'image/JPG', 'image/PNG']
            if (!mimetypes.includes(file.mimetype)) {
                callback({ message: 'File extension must be jpg, jpeg, or png' })
                return callback(null, false)

            }
            callback(null, true)
        }
    }).fields([
        {
            name: 'mainImage', maxCount: 1
        },
        {
            name: 'additionalImages1', maxCount: 1
        },
        {
            name: 'additionalImages2', maxCount: 1
        },
        {
            name: 'additionalImages3', maxCount: 1
        },
        {
            name: 'additionalImages4', maxCount: 1
        },
        {
            name: 'additionalImages5', maxCount: 1
        },
        {
            name: 'additionalImages6', maxCount: 1
        },
        {
            name: 'additionalImages7', maxCount: 1
        },
        {
            name: 'additionalImages8', maxCount: 1
        },
    ])
}

export default validateMainImageRecipes