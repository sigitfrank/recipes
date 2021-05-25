import moment from 'moment';
import { readdir } from 'fs/promises';
const formatFilename = async (callback, file) => {
    const dir = './public/uploads/images/'
    try {
        const files = await readdir(dir);
        const date = moment().format('YYYY-MMMM-Do')
        callback(null, `${files.length + 1}-${date}-${file.originalname}`)
    } catch (error) {
        console.log('error: ' + error.message)
    }
    return true
}

export default formatFilename