import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
function Recipe() {
    return (
        <div className="col-md-4 col-sm-12">

            <div className="card my-3">
                <Fade bottom>
                    <div className="card-header">
                        <img src="/assets/popular-recipes/1.png" alt="popular-recipes" className="w-100" />
                        <div className="overlay">
                            <span className="author">By: Nabilla Putri Faradila</span>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="card-body">
                        <h4>Spaghetti Carbonara</h4>
                        <div className="recipes-description">
                            <h5>Ingredients</h5>
                            <ul>
                                <li>1 tablespoon extra virgin olive oil or unsalted butter</li>
                                <li> 1/2 pound pancetta or thick cut bacon, diced</li>
                                <li>1-2 garlic cloves, minced, about 1 teaspoon (optional)</li>
                                <li> 3-4 whole eggs</li>
                                <li>1 cup grated parmesan or pecorino cheese</li>
                                <li> 1 pound spaghetti (or bucatini or fettuccine)</li>
                                <li> Salt and black pepper to taste</li>
                            </ul>
                        </div>
                        <p className="text-center mt-3 mb-0"> <Link to="/recipes/1" className="main-color"> Read more</Link></p>
                    </div>
                </Fade>
            </div>
        </div >
    )
}

export default Recipe
