import express from 'express'
import authenticateUser from '../middleware/authenticateUser.js'
import {deleteUser, getUsers } from '../controllers/user.js'
const userRouter = express.Router()

userRouter.get('/', authenticateUser, getUsers)
userRouter.delete('/:id', deleteUser)

export default userRouter