import React from 'react'
import '../../css/home/home-content.css'
import Recipes from './components/Recipes'
function HomeContent() {
  return (<div className="container-fluid home content">
    <div className="container">
      <section className="row justify-content-center">
        <div className="recipes-category">
          <h2>Popular Recipes</h2>
          <div className="line"></div>
        </div>
        <div className="row recipes-gallery">
            <Recipes/>
          </div>
      </section>
    </div>
  </div>)
}

export default HomeContent
