import React, { useContext } from 'react'
import ReactDom from 'react-dom'
import { RecipeCarouselContext } from '../../App'
function ModalRecipes() {
    const { recipesCarousel } = useContext(RecipeCarouselContext)
    return ReactDom.createPortal(
        <div className="modal fade pe-0" id="CarouselRecipesModal" tabIndex="-1" aria-labelledby="CarouselRecipesModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header pb-0">
                        <h5 className="modal-title" id="CarouselRecipesModal">Recipes Gallery</h5>
                    </div>
                    <div className="modal-body pt-0">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {
                                    recipesCarousel.length > 0 && (<>
                                        <div className="carousel-item active">
                                            <img src={`${process.env.REACT_APP_BASE_URL_BACKEND}/${recipesCarousel[0]}`} className="d-block w-100" alt="main-images" />
                                        </div>
                                        {
                                            recipesCarousel[1].map(additional => (<div key={additional.id} className="carousel-item">
                                                <img src={`${process.env.REACT_APP_BASE_URL_BACKEND}/${additional.value}`} className="d-block w-100" alt="additional-images" />
                                            </div>))
                                        }

                                    </>)
                                }
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>, document.querySelector('#modal-recipes-carousel'))
}

export default ModalRecipes
