import express from 'express'
import { postRecipes } from '../controllers/recipes.js'

const recipesRouter = express.Router()
recipesRouter.post('/', postRecipes)

export default recipesRouter
