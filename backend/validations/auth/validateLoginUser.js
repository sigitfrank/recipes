import { check, validationResult } from 'express-validator'
import USER from '../../models/User.js';

const validateLoginUser = [
    check('email')
        .isEmail()
        .withMessage('Email must be in valid email format')
        .custom(async email => {
            const isUserExist = await USER.findOne({ email })
            if (!isUserExist) throw new Error('User with this email does not exist')
            if (!isUserExist.email_verified_at) throw new Error('User with this email is already exists and not activated yet. Please check your email to activate account')
            return true
        }),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(400).send({ success: false, errors: errors.array() })
        next()
    }
]
export default validateLoginUser