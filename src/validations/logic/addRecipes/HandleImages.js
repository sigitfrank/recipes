const dispatchMainImage = (mainImage, addRecipesDispatch, addRecipeActionTypes) => {
    addRecipesDispatch({
        type: addRecipeActionTypes.SET_RECIPE_MAIN_IMAGE, payload: mainImage,
        status: 'main'
    })
}

const dispatchAdditionalImages = (additionalImage, addRecipesDispatch, addRecipeActionTypes) => {
    addRecipesDispatch({
        type: addRecipeActionTypes.SET_RECIPE_ADDITIONAL_IMAGES, payload: { additionalImage, id: additionalImage.meta.id },
        status: 'additional'
    })
}

export { dispatchMainImage, dispatchAdditionalImages }