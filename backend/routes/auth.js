import express from 'express'
import { createUser, deleteUser, activateUser, reSendEmailToActivateAccount, login, loginWithGoogle, loginWithFacebook, getUserLogin, logout } from '../controllers/auth.js'
import validateActivateAccount from '../validations/auth/validateActivateAccount.js'
import validateCreateUser from '../validations/auth/validateCreateUser.js'
import validateLoginUser from '../validations/auth/validateLoginUser.js'
const authRouter = express.Router()

// REGISTER
authRouter.post('/register', validateCreateUser, createUser)
authRouter.put('/activate', validateActivateAccount, activateUser) //it should be put method later
authRouter.post('/reActivate', reSendEmailToActivateAccount)

// LOGIN
authRouter.post('/login', validateLoginUser, login)
authRouter.get('/login', getUserLogin)
authRouter.get('/logout', logout)
authRouter.post('/loginWithGoogle', loginWithGoogle)
authRouter.post('/loginWithFacebook', loginWithFacebook)

authRouter.delete('/:id', deleteUser)
export default authRouter