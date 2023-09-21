import filterAdditionalImages from "../helpers/filterAdditionalImages.js"
import RECIPES from "../models/Recipes.js"
import USER from "../models/User.js"
import validateImagesRecipes from "../validations/recipes/validateImagesRecipes.js"

export const postRecipes = (req, res) => {
    const { userId, title, description, categories, cookTime, servePlates, ingredients, steps } = req.body
    const mainImage = `/uploads/images/recipes/${userId}/${req.files.mainImage[0].filename}`
    let ingredientsValue = [], stepsValue = [], additionalImagesValue = []
    JSON.parse(ingredients).map((ingredient, index) => {
        ingredientsValue = [...ingredientsValue, { id: index + 1, value: ingredient.value }]
    })
    JSON.parse(steps).map((step, index) => {
        stepsValue = [...stepsValue, { id: index + 1, value: step.value }]
    })

    const filteredAdditionalImages = filterAdditionalImages(additionalImagesValue, req.files, userId)

    const validateImages = validateImagesRecipes()
    validateImages(req, res, (err) => {
        if (err) return res.status(400).json({ success: false, msg: err })
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
            additionalImages: filteredAdditionalImages,
            numOfLikes: 0,
            numOfComments: 0,
        })
        return newRecipe.save().then(recipe => {
            res.status(201).json({ success: true, msg: 'Recipe created successfully', recipe })
        }).catch(error => {
            res.status(400).json({ success: false, msg: `Recipe failed to create ${error.message}` })
        })
    })
}

export const getUserRecipesList = (req, res) => {
    const { userId } = req.params
    const getUserRecipes = async () => {
        try {
            const recipes = await RECIPES.find({ userId }).select('mainImage title ingredients').populate('userId', 'name imageUrl googleId isUpdated')
            res.status(200).json({ success: true, recipes })
        } catch (error) {
            res.status(404).json({ success: false, msg: 'User recipes not found', recipes: [] })
        }
    }
    getUserRecipes()
}

export const getSingleRecipe = (req, res) => {
    const { _id } = req.params
    const getRecipe = async () => {
        try {
            const recipe = await RECIPES.findById({ _id }).populate('userId', 'name imageUrl googleId isUpdated')
            res.status(200).json({ success: true, recipe })
        } catch (error) {
            res.status(404).json({ success: false, msg: 'Recipe not found', recipe: {} })
        }
    }
    getRecipe()
}

export const getRecipesList = (req, res) => {
    const { search } = req.body || ''
    const getRecipes = async () => {
        try {
            let recipes = await RECIPES.find({}).select('mainImage title ingredients').populate('userId', 'name imageUrl googleId isUpdated')
            if (search) {
                recipes = recipes.filter(recipe => {
                    return recipe.title.toLowerCase().includes(search.toLowerCase())
                })
            }
            res.status(200).json({ success: true, recipes })
        } catch (error) {
            res.status(404).json({ success: false, msg: 'Recipe not found', recipe: [] })
        }
    }
    getRecipes()
}

export const deleteRecipeById = (req, res) => {
    const { _id } = req.params
    const deleteRecipe = async () => {
        try {
            await RECIPES.findByIdAndDelete(_id)
            res.status(200).json({ success: true })
        } catch (error) {
            res.status(404).json({ success: false, msg: 'Recipe failed to delete' })
        }
    }
    deleteRecipe()
}