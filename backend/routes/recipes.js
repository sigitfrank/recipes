import express from 'express'
import authenticateUser from '../middleware/authenticateUser.js'
import { postRecipes, getUserRecipesList, getSingleRecipe, getRecipesList } from '../controllers/recipes.js'
import validateImagesRecipes from '../validations/recipes/validateImagesRecipes.js'
const recipesRouter = express.Router()

recipesRouter.post('/', authenticateUser, validateImagesRecipes(), postRecipes)
recipesRouter.get('/user/:userId', getUserRecipesList)
recipesRouter.get('/:_id', getSingleRecipe)
recipesRouter.get('/', getRecipesList)

export default recipesRouter
