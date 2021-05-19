import express from 'express'
import { createUser, deleteUser, activateUser } from '../controllers/auth.js'
import validateCreateUser from '../validations/auth/validateCreateUser.js'
const userRouter = express.Router()

userRouter.post('/', validateCreateUser, createUser)
userRouter.delete('/:id', deleteUser)
userRouter.get('/activate/:email/:token', activateUser)

export default userRouter