import express from 'express'
import authenticateUser from '../middleware/authenticateUser.js'
import { updateUser, getUsers, deleteUser } from '../controllers/user.js'
import validateImageProfile from '../validations/user/validateImageProfile.js'

const userRouter = express.Router()
userRouter.get('/', authenticateUser, getUsers)
userRouter.put('/', authenticateUser, validateImageProfile(), updateUser)
userRouter.delete('/:id', deleteUser)

export default userRouter