import React from 'react'
import Fade from 'react-reveal/Fade';

import '../../css/home/home-header.css'
function HomeHeader() {
  return (
    <div className="container home header">
      <section className="row">
        <Fade left cascade>
          <div className="col-md-6">
            <div className="slogan-div">
              <h1>Let's Start Cooking with Best Recipes</h1>
              <p >Bagi Resep provides you to cook a lot of sip foods to serve with
your family, friends, and colleges!</p>
              <button className="btn get-started mt-2 mb-4">Get Started</button>
            </div>
          </div>
          <div className="col-md-6">
            <img src="/assets/home/hero-chef.png" alt="hero-chef" className="img-fluid" />
          </div>
        </Fade>
      </section>
    </div>
  )
}

export default HomeHeader
