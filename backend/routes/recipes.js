import express from 'express'
import authenticateUser from '../middleware/authenticateUser.js'
import { postRecipes, getUserRecipesList, getSingleRecipe, getRecipesList, deleteRecipeById } from '../controllers/recipes.js'
import validateImagesRecipes from '../validations/recipes/validateImagesRecipes.js'
const recipesRouter = express.Router()

recipesRouter.post('/', authenticateUser, validateImagesRecipes(), postRecipes)
recipesRouter.get('/user/:userId', authenticateUser, getUserRecipesList)
recipesRouter.get('/:_id', getSingleRecipe)
recipesRouter.post('/search', getRecipesList)
recipesRouter.delete('/:_id', deleteRecipeById)

export default recipesRouter
