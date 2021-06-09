import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { GET_RECIPES_LIST } from '../../../api/endpoints'
import { SearchContext } from '../../../routes/Routes'
import Recipe from './Recipe'
function Recipes() {
    const [recipes, setRecipes] = useState([])
    const { search, setSearch } = useContext(SearchContext)

    useEffect(() => {
        const getRecipesList = async () => {
            try {
                const response = await axios.post(GET_RECIPES_LIST, { search })
                const data = response.data.recipes
                setRecipes(data)
            } catch (error) {
                console.log(error)
            }
        }
        getRecipesList()
    }, [search])

    return (<>
        {recipes && <Recipe search={search} setSearch={setSearch} recipes={recipes} />}
    </>
    )
}

export default Recipes
