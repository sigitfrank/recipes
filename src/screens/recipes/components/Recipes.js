import React from 'react'
import Recipe from './Recipe'
const list = [1,2]
function Recipes() {
    // Looping category first
    return (<>
    {
        list.map((e, i)=>(
            <Recipe key={e} i={i}/>
        ))
    }
   
    </>
    )
}

export default Recipes
