import RECIPES from "../models/Recipes.js"
import validateMainImageRecipes from "../validations/recipes/validateMainImageRecipes.js"

export const postRecipes = (req, res) => {
    const { title, description, categories, cookTime, servePlates, ingredients, steps } = req.body
    const validateMainImage = validateMainImageRecipes()
    console.log()
    validateMainImage(req, res, (err) => {
        if (err) return res.status(400).json({ success: false, msg: err })
        const newRecipe = new RECIPES({
            title,
            description,
            categories: JSON.parse(categories),
            cookTime,
            servePlates,
            servePlates,
            servePlates,
        })
        return newRecipe.save().then(recipe => {
            res.status(201).json({ success: true, msg: 'Recipe created successfully', recipe })
        }).catch(error => {
            res.status(400).json({ success: false, msg: `Recipe failed to create ${error.message}` })
        })
    })
}