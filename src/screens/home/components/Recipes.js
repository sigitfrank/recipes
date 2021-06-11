import Recipe from './Recipe'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { GET_RECIPES_LIST } from '../../../api/endpoints'
function Recipes() {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        const getRecipesList = async () => {
            try {
                const response = await axios.post(GET_RECIPES_LIST)
                const data = response.data.recipes
                setRecipes(data)
            } catch (error) {
                console.log(error)
            }
        }
        getRecipesList()
    }, [])
    return (<>
        {recipes && <Recipe recipes={recipes} />}
    </>)
}

export default Recipes
