import express from 'express'
import { postRecipes } from '../controllers/recipes.js'

import authenticateUser from '../middleware/authenticateUser.js'
const recipesRouter = express.Router()
recipesRouter.post('/', authenticateUser, postRecipes)

export default recipesRouter
