import { check, validationResult } from 'express-validator'
import USER from '../../models/User.js';

const validateCreateUser = [
    check('name')
        .isLength({ min: 3 })
        .withMessage('Name value min 3 characters')
    ,
    check('email')
        .isEmail()
        .withMessage('Email must be in valid email format')
        .custom(async (value) => {
            const isUserExist = await USER.findOne({ email: value })
            if (isUserExist){
                if(isUserExist.googleId) throw new Error('User with this email is registered by google account. Please login with your google account') 
                if(isUserExist.facebookId) throw new Error('User with this email is registered by facebook account. Please login with your facebook account') 
                if(!isUserExist.email_verified_at) throw new Error('User with this email is already exists and not activated yet. Please check your email to activate account')
                throw new Error('User with this email is already exists. Please login into your account')
            }
            return true
        })
    ,
    check('password')
        .isLength({ min: 8 })
        .withMessage('Password value min 8 characters')
        .custom((value, { req }) => {
            if (value !== req.body.rePassword) throw new Error('Password confirmation does not match with password')
            return true
        })
    ,
    check('termAgreements')
        .custom(value => {
            if (!value) throw new Error('Term Agreement must be checked')
            return true
        })
    ,
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() })
        next();
    },
];

export default validateCreateUser