import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    email_verified_at: Date,
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    googleId: String,
    facebookId: String
}, {
    timestamps: true
})

const USER = mongoose.model('users', UserSchema)
export default USER
