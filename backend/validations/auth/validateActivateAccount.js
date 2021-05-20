import { param, validationResult } from 'express-validator'
import USER from '../../models/User.js';
import { currentTime } from '../../helpers/getTime.js'
const validateActivateAccount = [
    param('email')
        .custom(async email => {
            const user = await USER.findOne({ email })
            if (!user) throw new Error('Email does not exist')
            const expiredTime = user.token.split('&')[1]
            if (currentTime() > +expiredTime) throw new Error('Link has been expired')
            return true
        })
    ,
    param('token')
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