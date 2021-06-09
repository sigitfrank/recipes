import RECIPES from "../models/Recipes.js"
import validateMainImageRecipes from "../validations/recipes/validateMainImageRecipes.js"

export const postRecipes = (req, res) => {
    const { userId, title, description, categories, cookTime, servePlates, ingredients, steps } = req.body
    let ingredientsValue = [], stepsValue = []
    JSON.parse(ingredients).map((ingredient, index) => {
        ingredientsValue = [...ingredientsValue, { id: index + 1, value: ingredient.value }]
    })
    JSON.parse(steps).map((step, index) => {
        stepsValue = [...stepsValue, { id: index + 1, value: step.value }]
    })
    const validateMainImage = validateMainImageRecipes()
    validateMainImage(req, res, (err) => {
        if (err) return res.status(400).json({ success: false, msg: err })
        const mainImage = `/uploads/images/recipes/${userId}/main/${req.file.filename}`
        const newRecipe = new RECIPES({
            userId,
            title,
            description,
            categories: JSON.parse(categories),
            cookTime,
            servePlates,
            ingredients: ingredientsValue,
            steps: stepsValue,
            mainImage,
            numOfLikes:0,
            numOfComments:0,
        })
        return newRecipe.save().then(recipe => {
            res.status(201).json({ success: true, msg: 'Recipe created successfully', recipe })
        }).catch(error => {
            res.status(400).json({ success: false, msg: `Recipe failed to create ${error.message}` })
        })
    })
}

export const getRecipes = (req, res) => {
    const { userId } = req.params
    const getUserRecipes = async () => {
        try {
            const recipes = await RECIPES.find({ userId })
            res.status(200).json({ success: true, recipes })
        } catch (error) {
            res.status(404).json({ success: false, msg: 'User recipes not found', recipes: [] })
        }
    }
    getUserRecipes()
}