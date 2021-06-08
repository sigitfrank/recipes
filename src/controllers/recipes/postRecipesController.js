import axios from "axios"
import addRecipeActionTypes from "../../action-types/addRecipes/AddRecipes"
import { POST_RECIPES_URL } from "../../api/endpoints"
import toast from 'react-hot-toast';
import { toastStyling } from "../../helpers/toast"
const postRecipesController = async (data) => {
    const { addRecipesState, addRecipesDispatch, accessToken } = data
    const { title, description, categories, cookTime, servePlates, ingredients, steps, mainImage, additionalImages, isStateValid } = addRecipesState
    addRecipesDispatch({ type: addRecipeActionTypes.CHECK_POST_RECIPES, payload: addRecipesState })
    if (!isStateValid) return false
    try {
        let formData = new FormData()
        formData.append("title", title.value)
        formData.append("description", description.value)
        formData.append("categories", JSON.stringify(categories.category))
        formData.append("cookTime", cookTime.value)
        formData.append("servePlates", servePlates.value)
        formData.append("ingredients", JSON.stringify(ingredients))
        formData.append("steps", JSON.stringify(steps))
        formData.append("mainImage", mainImage.value)
        formData.append("additionalImages", additionalImages)
        const response = await axios.post(POST_RECIPES_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${accessToken}`
            }
        })
        console.log(response.data)

    } catch (error) {
        if(error.response.status === 500) {
            toast.error('Server cannot process your request', toastStyling)
        } else{
            const errorMessage = error.response.data
            toast.error(errorMessage.msg, toastStyling)
        }
        return false
    }

}

export default postRecipesController