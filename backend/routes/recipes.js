import express from 'express'
import authenticateUser from '../middleware/authenticateUser.js'
import { postRecipes, getRecipes, getSingleRecipe } from '../controllers/recipes.js'
import validateImagesRecipes from '../validations/recipes/validateImagesRecipes.js'
const recipesRouter = express.Router()

recipesRouter.post('/', authenticateUser, validateImagesRecipes(), postRecipes)
recipesRouter.get('/user/:userId', getRecipes)
recipesRouter.get('/:_id', getSingleRecipe)

export default recipesRouter
