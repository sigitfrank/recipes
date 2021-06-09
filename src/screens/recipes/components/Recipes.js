import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { GET_RECIPES_LIST } from '../../../api/endpoints'
import { SearchContext } from '../../../routes/Routes'
import Recipe from './Recipe'
const list = [1, 2]
function Recipes() {
    const [isSearched, setIsSearched] = useState(false)
    const [recipes, setRecipes] = useState([])
    const { search } = useContext(SearchContext)
    useEffect(() => {
        search ? setIsSearched(true) : setIsSearched(false)
    }, [search])

    useEffect(() => {
        const getRecipesList = async () => {
            try {
                const response = await axios.get(GET_RECIPES_LIST)
                const data = response.data.recipes
                setRecipes(data)
            } catch (error) {
                console.log(error)
            }

        }
        getRecipesList()
    }, [])

    if (isSearched)
        return (<>
            {
                list.map((e, i) => (e === +search && <Recipe key={e} i={i} />
                ))
            }
        </>)

    return (<>
        {recipes && <Recipe recipes={recipes} />}
    </>
    )
}

export default Recipes
