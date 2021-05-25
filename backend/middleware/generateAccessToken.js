import jwt from 'jsonwebtoken'
function generateAccessToken(user) {
    return jwt.sign(user, process.env.SESSION_SECRET, { expiresIn: '3600s' })
}

export default generateAccessToken