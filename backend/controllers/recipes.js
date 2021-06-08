import RECIPES from "../models/Recipes.js"

export const postRecipes = (req, res) => {
    const { title, description, categories, ingredients, steps } = req.body
    console.log(req.body)
    res.status(200).json({ success: true, msg: 'Recipe created successfully', data: { title, description, categories, ingredients, steps } })
}