import React, { useState, useReducer, useCallback } from 'react'
import Fade from 'react-reveal/Fade'
import TagInputs from '../../helpers/TagInputs'
import { initialAddRecipesState } from '../../states/addRecipes/AddRecipes'
import AddRecipesReducer from '../../reducers/addRecipes/AddRecipesReducer'
import { MdRemoveCircle } from 'react-icons/md'
import addRecipeActionTypes from '../../action-types/addRecipes/AddRecipes'
import '../../css/users/add-recipes.css'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import InvalidFeedback from '../../validations/components/InvalidFeedback'
import AdditionalImageGallery from '../../validations/components/addRecipes/AdditionalImageGallery'
import MainImageGallery from '../../validations/components/addRecipes/MainImageGallery'
import { dispatchMainImage, dispatchAdditionalImages } from '../../validations/logic/addRecipes/HandleImages'

function AddRecipes() {
    const [addRecipesState, addRecipesDispatch] = useReducer(AddRecipesReducer, initialAddRecipesState)
    const { title, description, categories, cookTime, servePlates, ingredients, steps } = addRecipesState
    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    const handleMainImageGallery = useCallback((files) => {
        return MainImageGallery(files, addRecipesDispatch)
    }, [])

    const handleAdditionalImageGallery = useCallback((files) => {
        return AdditionalImageGallery(files, addRecipesDispatch)
    }, [])

    const handleMainImage = mainImage => {
        dispatchMainImage(mainImage, addRecipesDispatch)
        return {}
    }

    const handleAdditionalImages = additionalImage => {
        dispatchAdditionalImages(additionalImage, addRecipesDispatch)
        return {}
    }

    return (<form className="add-recipes" onSubmit={handleFormSubmit}>
        {/* Header */}
        <div className="container-fluid">
            <div className="container">
                <section className="row">
                    <div className="add-recipes-title">
                        <h1>Write your recipes</h1>
                        <div className="line"></div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="primary-gallery">
                                <Dropzone
                                    getUploadParams={handleMainImage}
                                    accept="image/*"
                                    PreviewComponent={handleMainImageGallery}
                                    maxFiles={1}
                                    inputContent="Drop main image"
                                />
                            </div>
                            <div className="secondary-gallery">
                                <Dropzone
                                    getUploadParams={handleAdditionalImages}
                                    accept="image/*"
                                    PreviewComponent={handleAdditionalImageGallery}
                                    maxFiles={8}
                                    inputContent="Drop additional images"
                                    inputWithFilesContent={files => `${8 - files.length} more left`}
                                />
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="form-group">
                                <input type="text"
                                    className="form-control"
                                    placeholder="ex: Nasi Goreng Tenis"
                                    value={title.value}
                                    onChange={(event) => addRecipesDispatch({ type: addRecipeActionTypes.SET_RECIPE_TITLE, payload: event.target.value })}
                                />
                                {title.error.status && <InvalidFeedback message={title.error.message} isError={title.error.status} />}
                            </div>
                            <div className="form-group">
                                <textarea
                                    cols="30"
                                    rows="10"
                                    className="form-control"
                                    placeholder=" Nasi goreng tenis adalah resep turun temurun dari keluarga kelurahan dan
                                    memiliki cita rasa yang unik. Kebanyakan orang ancur bilang ini memiliki rasa sip,
                                    tapi lebih sip lagi kalau tidak usah dimasak."
                                    value={description.value}
                                    onChange={(event) => addRecipesDispatch({ type: addRecipeActionTypes.SET_RECIPE_DESCRIPTION, payload: event.target.value })}
                                >
                                </textarea>
                                {description.error.status && <InvalidFeedback message={description.error.message} isError={description.error.status} />}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        {/* Detail-recipes */}
        <div className="container-fluid detail-recipes">
            <div className="container">
                <section className="row">
                    <h2 className="mt-3">Detail Recipe</h2>
                    <div className="line"></div>
                    <div className="form-group recipe-categories">
                        <TagInputs data={categories} dispatchInput={addRecipesDispatch} />
                        {/* {categories.error.status && <InvalidFeedback message={categories.error.message} isError={categories.error.status} />} */}
                    </div>
                    <div className="form-group recipe-cook-time">
                        <select className="form-control" onChange={(event) => addRecipesDispatch({ type: addRecipeActionTypes.SET_RECIPE_COOK_TIME, payload: event.target.value })}>
                            <option value="">Cook Time</option>
                            <option value="5-15">5-15 Minutes</option>
                            <option value="15-30">15-30 Minutes</option>
                            <option value="30"> &gt; 30 Minutes</option>
                        </select>
                        {cookTime.error.status && <InvalidFeedback message={cookTime.error.message} isError={cookTime.error.status} />}
                    </div>
                    <div className="form-group recipe-serve-plate">
                        <select className="form-control" onChange={(event) => addRecipesDispatch({ type: addRecipeActionTypes.SET_RECIPE_SERVE_PLATE, payload: event.target.value })}>
                            <option value="">Serve Plate(s)</option>
                            <option value="1-2">1-2</option>
                            <option value="3-5">3-5</option>
                            <option value="5"> &gt; 5</option>
                        </select>
                        {servePlates.error.status && <InvalidFeedback message={servePlates.error.message} isError={servePlates.error.status} />}
                    </div>
                </section>
            </div>
        </div>

        {/* Ingredients */}
        <div className="container-fluid ingredients">
            <div className="container">
                <section className="row">
                    <h2 className="mt-3">Ingredients</h2>
                    <div className="line"></div>
                    {
                        ingredients.map((ingredient, index) => (<Fade key={ingredient.id} >
                            <div className="form-group" onClick={(event) => addRecipesDispatch({ type: addRecipeActionTypes.REMOVE_MORE_INGREDIENTS, payload: ingredient.id, event })}>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={`ex: ${ingredient.placeholder}`}
                                    value={ingredient.value}
                                    onChange={(event) => addRecipesDispatch({ type: addRecipeActionTypes.SET_RECIPE_INGREDIENTS, payload: event.target.value, id: ingredient.id })}
                                />
                                {ingredient.error.status && <InvalidFeedback message={ingredient.error.message} isError={ingredient.error.status} />}
                                {index > 2 && <MdRemoveCircle className="remove-icon" />}
                            </div>
                        </Fade>))
                    }
                    <button type="button" onClick={() => addRecipesDispatch({ type: addRecipeActionTypes.ADD_MORE_INGREDIENTS })} className="btn add-more">Add more</button>
                </section>
            </div>
        </div>

        <div className="container-fluid steps">
            <div className="container">
                <section className="row">
                    <h2 className="mt-3">Steps</h2>
                    <div className="line"></div>
                    {
                        steps.map((step, index) => (<Fade key={step.id}>
                            <div className="form-group" onClick={(event) => addRecipesDispatch({ type: addRecipeActionTypes.REMOVE_MORE_STEPS, payload: step.id, event })}>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={`ex: ${step.placeholder}`}
                                    value={step.value}
                                    onChange={(event) => addRecipesDispatch({ type: addRecipeActionTypes.SET_RECIPE_STEPS, payload: event.target.value, id: step.id })}
                                />
                                {step.error.status && <InvalidFeedback message={step.error.message} isError={step.error.status} />}
                                {index > 2 && <MdRemoveCircle className="remove-icon" />}
                            </div>
                        </Fade>))
                    }
                    <button type="button" onClick={() => addRecipesDispatch({ type: addRecipeActionTypes.ADD_MORE_STEPS })} className="btn add-more">Add more</button>
                </section>
            </div>
        </div>

        <div className="container publish">
            <button type="button" onClick={() => alert('Published')} className="btn">Publish</button>
        </div>
    </form >)
}

export default AddRecipes
