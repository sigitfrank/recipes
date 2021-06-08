import addRecipeActionTypes from "../../action-types/addRecipes/AddRecipes"
import { validateStateBeforePostRecipes } from "../../validations/logic/addRecipes/validateStateBeforePostRecipes"

const postRecipesController = async (data) => {
    const { addRecipesState, addRecipesDispatch } = data
    const isStateValid = validateStateBeforePostRecipes(addRecipesState)

    if (!isStateValid) {
        addRecipesDispatch({ type: addRecipeActionTypes.CHECK_POST_RECIPES, payload: addRecipesState })
        return false
    }

    try {

    } catch (error) {

    }

}

export default postRecipesController