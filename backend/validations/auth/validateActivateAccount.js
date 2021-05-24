import { check, validationResult } from 'express-validator'
import USER from '../../models/User.js';
const validateActivateAccount = [
    check('email')
        .custom(async email => {
            const user = await USER.findOne({ email })
            if (!user) throw new Error('Email does not exist')
            return true
        })
    ,
    check('token')
        .custom(async token => {
            const user = await USER.findOne({ token })
            if (!user) throw new Error('Email with this token does not exist')
        })
    ,
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() });
        next();
    },
]

export default validateActivateAccount