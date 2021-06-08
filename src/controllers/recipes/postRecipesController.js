import axios from "axios"
import addRecipeActionTypes from "../../action-types/addRecipes/AddRecipes"
import { POST_RECIPES_URL } from "../../api/endpoints"
import authAxios from "../../helpers/authAxios"

const postRecipesController = async (data) => {
    const { addRecipesState, addRecipesDispatch, accessToken } = data
    const { title, description, categories, cookTime, servePlates, ingredients, steps, mainImage, additionalImages, isStateValid } = addRecipesState
    addRecipesDispatch({ type: addRecipeActionTypes.CHECK_POST_RECIPES, payload: addRecipesState })
    if (!isStateValid) return false
    try {
        const recipesData = {
            title: title.value,
            description: description.value,
            categories: categories.category,
            cookTime: cookTime.value,
            servePlates: servePlates.value,
            ingredients: ingredients,
            steps: steps,
            mainImage: mainImage.value.file,
            additionalImages: additionalImages.value
        }
        // const response = await authAxios(accessToken).post(POST_RECIPES_URL, recipesData, {
        // })
        console.log(accessToken)
        let formData = new FormData()
        formData.append("title", title.value)
        const response = await axios.post(POST_RECIPES_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${accessToken}`
            }
        })
        console.log(response)

    } catch (error) {
        console.log(error.response.data)
    }

}

export default postRecipesController