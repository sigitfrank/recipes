import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import authRouter from './routes/auth.js'
import userRouter from './routes/user.js'
import blogRouter from './routes/blog.js'
import connectToDB from './database/mongoose.js'
import recipesRouter from './routes/recipes.js'
dotenv.config()
const app = express()

connectToDB(process.env)
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
app.use(cookieParser())
app.use(session({
    key: process.env.userID,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: Date.now() + (14 * 24 * 60 * 60)
    }
}))

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/blog', blogRouter)
app.use('/api/recipes', recipesRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})