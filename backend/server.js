import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import userRouter from './routes/auth.js'
import connectToDB from './database/mongoose.js'
dotenv.config()
const app = express()

connectToDB(process.env)

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(session({
    key: process.env.userID,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24
    }
}))

app.use('/api/user', userRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})