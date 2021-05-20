import express from 'express'
import { createUser, deleteUser, activateUser, reSendEmailToActivateAccount } from '../controllers/auth.js'
import validateActivateAccount from '../validations/auth/validateActivateAccount.js'
import validateCreateUser from '../validations/auth/validateCreateUser.js'
const userRouter = express.Router()

userRouter.post('/', validateCreateUser, createUser)
userRouter.delete('/:id', deleteUser)
userRouter.put('/activate/:email/:token', validateActivateAccount, activateUser) //it should be put method later
userRouter.post('/reActivate', reSendEmailToActivateAccount)

export default userRouter