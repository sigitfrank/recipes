import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/home/home-content.css'
function HomeContent() {
  return (<div className="container-fluid home content">
    <div className="container">
      <section className="row">
        <div className="recipes-category">
          <h2>Popular Recipes</h2>
          <div className="line"></div>
        </div>
        <div className="row recipes-gallery">
          <div className="col-md-4 col-sm-12">
            <div className="card my-3">
              <div className="card-header">
                <img src="/assets/popular-recipes/1.png" alt="popular-recipes" className="w-100" />
                <div className="overlay">
                  <span className="author">By: Nabilla Putri Faradila</span>
                </div>
              </div>
              <div className="card-body">
                <h4>Spaghetti Carbonara</h4>
                <div className="recipes-description">
                  <h5>Ingredients</h5>
                  <ul>
                    <li>
                      1 tablespoon extra virgin olive oil or unsalted butter
                </li>
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
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card my-3">
              <div className="card-header">
                <img src="/assets/popular-recipes/1.png" alt="popular-recipes" className="w-100" />
                <div className="overlay">
                  <span className="author">By: Nabilla Putri Faradila</span>
                </div>
              </div>
              <div className="card-body">
                <h4>Spaghetti Carbonara</h4>
                <div className="recipes-description">
                  <h5>Ingredients</h5>
                  <ul>
                    <li>
                      1 tablespoon extra virgin olive oil or unsalted butter
                </li>
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
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card my-3">
              <div className="card-header">
                <img src="/assets/popular-recipes/1.png" alt="popular-recipes" className="w-100" />
                <div className="overlay">
                  <span className="author">By: Nabilla Putri Faradila</span>
                </div>
              </div>
              <div className="card-body">
                <h4>Spaghetti Carbonara</h4>
                <div className="recipes-description">
                  <h5>Ingredients</h5>
                  <ul>
                    <li>
                      1 tablespoon extra virgin olive oil or unsalted butter
                </li>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>)
}

export default HomeContent
