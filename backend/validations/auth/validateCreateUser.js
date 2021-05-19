import { check, validationResult } from 'express-validator'
import USER from '../../models/User.js';

const validateCreateUser = [
    check('name').isLength({ min: 3 })
        .withMessage('Name value min 3 characters'),
    check('email')
        .isEmail()
        .withMessage('Email must be in valid email format')
        .custom(async (value) => {
            const isUserExist = await USER.findOne({ email: value })
            if (isUserExist) throw new Error('User with this email is already exists')
            return true
        })
    ,
    check('password')
        .isLength({ min: 8 })
        .withMessage('Password value min 8 characters')
        .custom((value, { req }) => {
            if (value !== req.body.rePassword) throw new Error('Password confirmation does not match with password');
            
            return true
        })
    ,
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() });
        next();
    },
];

export default validateCreateUser