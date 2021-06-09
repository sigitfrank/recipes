import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { GET_RECIPES_LIST } from '../../../api/endpoints'
import { SearchContext } from '../../../routes/Routes'
import Recipe from './Recipe'
const list = [1, 2]
function Recipes() {
    const [isSearched, setIsSearched] = useState(false)
    const { search } = useContext(SearchContext)

    useEffect(() => {
        search ? setIsSearched(true) : setIsSearched(false)
    }, [search])

    useEffect(() => {
        const getRecipesList = async () => {
            try {
                const response = await axios.get(GET_RECIPES_LIST)
                console.log(response)
            } catch (error) {
                console.log(error)
            }

            getRecipesList()
        }
    }, [])

    if (isSearched)
        return (<>
            {
                list.map((e, i) => (e === +search && <Recipe key={e} i={i} />
                ))
            }
        </>)

    return (<>
        {
            list.map((e, i) => (
                <Recipe key={e} i={i} />
            ))
        }

    </>
    )
}

export default Recipes
