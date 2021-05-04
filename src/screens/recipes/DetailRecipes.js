import React from 'react'
import '../../css/recipes/detail-recipes.css'
function DetailRecipes() {
    return (<>
        <img src="/assets/bg-half-circle.png" alt="bg-half-circle" className="bg-half-circle" />
        <div className="container-fluid detail-recipes content">
            <div className="container">
                <section className="row recipes-header">
                    <h2>Spaghetti Carbonara</h2>
                    <div className="recipes-author">
                        <img src="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2018/05/01/24787058.jpg" alt="author" />
                        <span>By Juna The Master</span>
                    </div>
                    <div className="col-md-8">
                        <div className="food-gallery">
                            <img src="https://wallpaperaccess.com/full/271681.jpg" alt="food-pic" className="main" />
                            <div className="small-gallery">
                                <img src="/assets/popular-recipes/3.png" alt="food-pic" />
                                <img src="/assets/popular-recipes/3.png" alt="food-pic" />
                                <img src="/assets/popular-recipes/3.png" alt="food-pic" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card recipes-property">
                            <div className="card-body">
                                <ul>
                                    <li><span>Prep</span>: 20 mins</li>
                                    <li><span>Cook</span>: 15 mins</li>
                                    <li><span>Additional</span>: 5 mins</li>
                                    <li><span>Total</span>: 40 mins</li>
                                    <li><span>Servings</span>: 4</li>
                                    <li><span>Yield</span>: 4 servings</li>
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
                    <div className="ingredients">
                        <div className="col-md-2">
                            <h2>Ingredients</h2>
                            <div className="line"></div>
                        </div>
                        <div className="col-md-12">
                            <div className="card card-ingredients">
                                <ul>
                                    <li>1 tablespoon extra virgin olive oil or unsalted butter</li>
                                    <li>1/2 pound pancetta or thick cut bacon, diced</li>
                                    <li>1-2 garlic cloves, minced, about 1 teaspoon (optional)</li>
                                    <li>3-4 whole eggs</li>
                                    <li>1 cup grated parmesan or pecorino cheese</li>
                                    <li>1 pound spaghetti (or bucatini or fettuccine)</li>
                                    <li>Salt and black pepper to taste</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="directions">
                        <div className="col-md-2">
                            <h2>Directions</h2>
                            <div className="line"></div>
                        </div>
                        <div className="col-md-12">
                            <div className="card card-directions">
                                <ul>
                                    <li>
                                        Step 1
                                        <p>
                                            Preheat an outdoor grill for medium-high heat and lightly oil the grate.
                                        </p>
                                    </li>
                                    <li>
                                        Step 2
                                        <p>
                                            Pound chicken to a 1-inch thickness for even grilling. Brush oil over chicken and sprinkle Jamaican jerk
                                            seasoning evenly on both sides. Set aside.
                                        </p>
                                    </li>
                                    <li>
                                        Step 3
                                        <p>
                                            Combine pineapple, red pepper, jalapeno pepper, red onion, cilantro, lime juice, and salt in a small bowl for
                                            the salsa. Set aside
                                        </p>
                                    </li>
                                    <li>
                                        Step 4
                                        <p>
                                            Place chicken on the hot grill and lower heat to medium. Grill until chicken is no longer pink in the center and
                                            juices run clear, 12 to 14 minutes, turning halfway through. An instant-read thermometer inserted into the center
                                            should read at least 165 degrees F (74 degrees C). Transfer to a plate to rest for 5 minutes.
                                        </p>
                                    </li>
                                    <li>
                                        Step 5
                                        <p>
                                            Top chicken with salsa mixture and serve.
                                        </p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </>)
}

export default DetailRecipes
