import express from 'express'
import authenticateUser from '../middleware/authenticateUser.js'
import { postRecipes } from '../controllers/recipes.js'
import validateMainImageRecipes from '../validations/recipes/validateMainImageRecipes.js'
const recipesRouter = express.Router()
recipesRouter.post('/', authenticateUser, validateMainImageRecipes(), postRecipes)

export default recipesRouter
