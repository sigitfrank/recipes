import React from 'react'
import '../../css/recipes/recipes-list.css'
import Recipes from './components/Recipes'
function RecipesList() {
  return (<>
    <img src="/assets/bg-half-circle.png" alt="bg-half-circle" className="bg-half-circle" />
    <Recipes />
  </>)
}

export default RecipesList
