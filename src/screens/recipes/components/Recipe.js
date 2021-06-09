import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import { MdClear } from 'react-icons/md'
function Recipe({ search, setSearch, recipes }) {
  console.log(recipes)
  return (
    // <div className={`container-fluid recipes-list ${index % 2 === 0 ? 'content' : ''}`}>
    <div className={`container-fluid recipes-list`}>
      <div className="container">
        <section className="row justify-content-center">
          {search && <div className="search-container">
            Search:  <span className="search-keyword"> {search}</span>
            <span className="search-clearIcon" onClick={() => setSearch('')}><MdClear /></span>
          </div>}

          {recipes.length > 0 ? (<>
            <div className="recipes-category">
              <Fade>
                <h2>Recipes List</h2>
                <div className="line"></div>
              </Fade>
            </div>
            <div className="row recipes-gallery">
              {recipes.map(recipe => (<div key={recipe._id} className="col-md-4 col-sm-12">
                <div className="card my-3">
                  <Fade bottom>
                    <div className="card-header">
                      <img src={`${process.env.REACT_APP_BASE_URL_BACKEND}/${recipe.mainImage}`} alt="popular-recipes" className="w-100" />
                      <div className="overlay">
                        <span className="author">{recipe.userId.name}</span>
                      </div>
                    </div>
                  </Fade>
                  <Fade left>
                    <div className="card-body">
                      <h4>{recipe.title}</h4>
                      <div className="recipes-description">
                        <h5>Ingredients</h5>
                        <ul>
                          {recipe.ingredients.map(ingredient => (
                            <li key={ingredient.id}>{ingredient.value}</li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-center mt-3 mb-0">  <Link to={`/recipes/${recipe._id}`} className="main-color"> Read more</Link></p>
                    </div>
                  </Fade>
                </div>
              </div>))}
            </div>
          </>) : !search ? (<p className="recipes-not-exist">Loading...</p>) : (<p className="recipes-not-exist">Recipes you searched do not exist, try another keyword</p>)}
        </section>
      </div>
    </div>
  )
}

export default Recipe
