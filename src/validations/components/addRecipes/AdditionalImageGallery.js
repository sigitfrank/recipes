import React from 'react'
import Fade from 'react-reveal/Fade'
function AdditionalImageGallery(files, addRecipesDispatch, addRecipeActionTypes) {

    const removeImage = (event, fileWithMeta) => {
        const id = event.target.dataset.id
        addRecipesDispatch({ type: addRecipeActionTypes.REMOVE_RECIPE_ADDITIONAL_IMAGES, payload: id })
        fileWithMeta.remove()
    }

    const gallery = (files) => {
        const { meta, fileWithMeta } = files
        return <Fade top cascade>
            <img onClick={(event) => removeImage(event, fileWithMeta)} src={meta.previewUrl} alt="preview-recipe-img" data-id={meta.id} className="img-fluid preview-recipe-img" />
        </Fade>
    }
    return (
        gallery(files)
    )
}

export default AdditionalImageGallery
