import React from 'react'

function HomeHeader() {
    return (
        <div className="container header">
        <section className="row main-header">
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
        </section>
      </div>
    )
}

export default HomeHeader
