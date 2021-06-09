import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { GET_SINGLE_RECIPE_URL } from '../../api/endpoints'
import '../../css/recipes/detail-recipes.css'
import formatRecipeCategory from '../../helpers/formatRecipeCategory'
import { scrollViewTop } from '../../helpers/scrollViewTop'
function DetailRecipes() {
    const [recipe, setRecipe] = useState(null)
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
    return (<>
        <img src="/assets/bg-half-circle.png" alt="bg-half-circle" className="bg-half-circle" />
        {recipe ? (<>
            <div className="container-fluid detail-recipes content">
                <div className="container">
                    <section className="row recipes-header">
                        <h2 className="recipes-title">{recipe.title}</h2>
                        <div className="recipes-author">
                            {
                                recipe.userId.isUpdated || !recipe.userId.googleId ? (<img src={`${process.env.REACT_APP_BASE_URL_BACKEND}/${recipe.userId.imageUrl}`} alt="author" />) : (<img src={`${recipe.userId.imageUrl}`} alt="author" />)
                            }
                            <span>{recipe.userId.name}</span>
                        </div>
                        <div className="col-md-8">
                            <div className="food-gallery">
                                <img src={`${process.env.REACT_APP_BASE_URL_BACKEND}/${recipe.mainImage}`} alt="food-pic" className="main" />
                                <div className="small-gallery">
                                    {recipe.additionalImages.map(additionalImage => (
                                        <img key={additionalImage.id} src={`${process.env.REACT_APP_BASE_URL_BACKEND}/${additionalImage.value}`} alt="food-pic" />
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
