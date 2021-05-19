import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './routes/auth.js'

dotenv.config()
const app = express()
mongoose.connect(process.env.MONGO_DB_HOST, {
    dbName: 'bagiresep',
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Connected to database`)
}).catch(error => console.log(`Error ${error}`))


app.use(express.json())
app.use(cors())

app.use('/api/user', userRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})