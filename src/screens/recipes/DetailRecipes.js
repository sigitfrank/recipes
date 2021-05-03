import React from 'react'
import '../../css/recipes/detail-recipes.css'
function DetailRecipes() {
    return (
        <div className="container-fluid detail-recipes content">
            <section className="row">
                <div className="col-md-12">
                    <h2>Spaghetti Carbonara</h2>
                    <div className="recipes-author">
                        <img src="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2018/05/01/24787058.jpg" alt="author" />
                        <span>By Juna The Master</span>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="food-gallery">
                        <img src="/assets/popular-recipes/1.png" alt="food-pic" className="main" />
                        <div className="small-gallery">
                            <img src="/assets/popular-recipes/1.png" alt="food-pic" />
                            <img src="/assets/popular-recipes/1.png" alt="food-pic" />
                            <img src="/assets/popular-recipes/1.png" alt="food-pic" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">

                </div>
            </section>
        </div>
    )
}

export default DetailRecipes
