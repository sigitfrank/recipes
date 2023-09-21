import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { DELETE_RECIPE_URL, GET_SINGLE_RECIPE_URL } from '../../api/endpoints'
import { RecipeCarouselContext } from '../../App'
import '../../css/recipes/detail-recipes.css'
import formatRecipeCategory from '../../helpers/formatRecipeCategory'
import getDate from '../../helpers/getDate'
import { AiFillDelete } from 'react-icons/ai'
import { scrollViewTop } from '../../helpers/scrollViewTop'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/AppProvider'
function DetailRecipes() {
    const [recipe, setRecipe] = useState(null)
    const { setRecipesCarousel } = useContext(RecipeCarouselContext)
    const { user } = useContext(AuthContext)
    const history = useHistory()

    useEffect(() => {
        scrollViewTop()
        const getSingleRecipe = async () => {
            try {
                const response = await axios.get(`${GET_SINGLE_RECIPE_URL}/${window.location.href.split('/')[4]}`)
                const data = response.data.recipe
                setRecipe(data)
            } catch (error) {
                console.log(error)
            }
        }
        getSingleRecipe()
    }, [])

    const handleModalRecipes = (e) => {
        return setRecipesCarousel([recipe.mainImage, recipe.additionalImages])
    }

    const handleDelete = async () => {
        const shouldDelete = window.confirm(`Are you sure want to delete this?`)
        if (!shouldDelete) return
        try {
            const res = await axios.delete(`${DELETE_RECIPE_URL}/${recipe._id}`)
            if (res !== undefined)
                history.push('/recipes')
        } catch (error) {
            console.error('error', error)
        }

    }

    return (<>
        <img src="/assets/bg-half-circle.png" alt="bg-half-circle" className="bg-half-circle" />
        {recipe ? (<>
            <div className="container-fluid detail-recipes content">
                <div className="container">
                    <section className="row recipes-header">
                        <div className='d-flex align-items-center'>
                            <h2 className="recipes-title">{recipe.title}</h2>
                            {
                                user?.userData?._id === recipe.userId._id && <AiFillDelete style={{ cursor: 'pointer' }} className='text-danger' onClick={handleDelete} />
                            }
                        </div>
                        <div className="recipes-author">
                            {
                                recipe.userId.isUpdated || !recipe.userId.googleId ? (<img src={`${process.env.REACT_APP_BASE_URL_BACKEND}/${recipe.userId.imageUrl}`} alt="author" />) : (<img src={`${recipe.userId.imageUrl}`} alt="author" />)
                            }
                            <div className="user-info">
                                <span>{recipe.userId.name}</span>
                                <p>{getDate(recipe.createdAt)}</p>
                            </div>

                        </div>
                        <div className="col-md-8">
                            <div className="food-gallery">
                                <img src={`${process.env.REACT_APP_BASE_URL_BACKEND}/${recipe.mainImage}`} data-bs-toggle="modal" data-bs-target="#CarouselRecipesModal" onClick={(e) => handleModalRecipes(e)} alt="food-pic" className="main" />
                                <div className="small-gallery">
                                    {recipe.additionalImages.map(additionalImage => (
                                        <img key={additionalImage.id} src={`${process.env.REACT_APP_BASE_URL_BACKEND}/${additionalImage.value}`} data-bs-toggle="modal" data-idrecipe={`${recipe._id}`} data-bs-target="#CarouselRecipesModal" onClick={(e) => handleModalRecipes(e)} alt="food-pic" />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card recipes-property">
                                <div className="card-body">
                                    <h2>Category</h2>
                                    <div className="line"></div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Category</td>
                                                <td>:</td>
                                                <td>
                                                    {recipe.categories.map((category, index) => (<span key={category.id}> {formatRecipeCategory(recipe.categories, category, index)} </span>))}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Cook Time</td>
                                                <td>:</td>
                                                <td>{recipe.cookTime} Mins</td>
                                            </tr>
                                            <tr>
                                                <td>Serves</td>
                                                <td>:</td>
                                                <td>{recipe.servePlates} Plates</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div className="card recipes-property">
                                <div className="card-body">
                                    <h2>Ingredients</h2>
                                    <div className="line"></div>
                                    <ul>
                                        {recipe.ingredients.map(ingredient => (<li key={ingredient.id}>{ingredient.value}</li>))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="container-fluid detail-recipes">
                <div className="container">
                    <section className="row recipes-body">
                        <div className="directions">
                            <div className="col-md-2">
                                <h2>Directions</h2>
                                <div className="line"></div>
                            </div>
                            <div className="col-md-12">
                                <div className="card card-directions">
                                    <ul>
                                        {recipe.steps.map((step, index) => (<li key={step.id}>
                                            Step {index + 1}
                                            <p>
                                                {step.value}
                                            </p>
                                        </li>))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>) : (<div className="container text-center">Recipe doesnt exist!</div>)}

    </>)
}

export default DetailRecipes
