import express from 'express'
import { createUser, deleteUser, activateUser, reSendEmailToActivateAccount, login, loginWithGoogle, loginWithFacebook, getUserLogin } from '../controllers/auth.js'
import validateActivateAccount from '../validations/auth/validateActivateAccount.js'
import validateCreateUser from '../validations/auth/validateCreateUser.js'
import validateLoginUser from '../validations/auth/validateLoginUser.js'
const userRouter = express.Router()

// REGISTER
userRouter.post('/register', validateCreateUser, createUser)
userRouter.put('/activate', validateActivateAccount, activateUser) //it should be put method later
userRouter.post('/reActivate', reSendEmailToActivateAccount)

// LOGIN
userRouter.post('/login', validateLoginUser, login)
userRouter.get('/login', getUserLogin)
userRouter.post('/loginWithGoogle', loginWithGoogle)
userRouter.post('/loginWithFacebook', loginWithFacebook)

userRouter.delete('/:id', deleteUser)
export default userRouter