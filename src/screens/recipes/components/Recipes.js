import React, { useState, useEffect, useContext } from 'react'
import { SearchContext } from '../../../routes/Routes'
import Recipe from './Recipe'
const list = [1, 2]
function Recipes() {
    const [isSearched, setIsSearched] = useState(false)
    const { search } = useContext(SearchContext)

    useEffect(() => {
        search ? setIsSearched(true) : setIsSearched(false)
    }, [search])
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
