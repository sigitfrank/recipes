import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
function Recipe({ recipes }) {
    return (<>
        {recipes.map(recipe => (<div className="col-md-4 col-sm-12" key={recipe._id}>
            <div className="card my-3">
                <Fade bottom>
                    <div className="card-header">
                        <img src={`${process.env.REACT_APP_BASE_URL_BACKEND}/${recipe.mainImage}`} alt="popular-recipes" className="w-100" />
                        <div className="overlay">
                            <span className="author">{recipe.userId.name}</span>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="card-body">
                        <h4>{recipe.title}</h4>
                        <div className="recipes-description">
                            <h5>Ingredients</h5>
                            <ul>
                                {recipe.ingredients.map(ingredient => (<li key={ingredient.id}>{ingredient.value}</li>))}
                            </ul>
                        </div>
                        <p className="text-center mt-3 mb-0"> <Link to={`/recipes/${recipe._id}`} className="main-color"> Read more</Link></p>
                    </div>
                </Fade>
            </div>
        </div>))}
    </>)
}

export default Recipe
