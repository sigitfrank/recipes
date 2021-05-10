import addRecipeActionTypes from '../../../action-types/addRecipes/AddRecipes'
const dispatchMainImage = (mainImage, addRecipesDispatch) => {
    addRecipesDispatch({
        type: addRecipeActionTypes.SET_RECIPE_MAIN_IMAGE, payload: mainImage,
        status: 'main'
    })
}

const dispatchAdditionalImages = (additionalImage, addRecipesDispatch) => {
    addRecipesDispatch({
        type: addRecipeActionTypes.SET_RECIPE_ADDITIONAL_IMAGES, payload: { additionalImage, id: additionalImage.meta.id },
        status: 'additional'
    })
}

export { dispatchMainImage, dispatchAdditionalImages }