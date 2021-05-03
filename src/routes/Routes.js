import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import HomeHeader from '../screens/home/HomeHeader'
import HomeContent from '../screens/home/HomeContent'
import RecipesList from '../screens/recipes/RecipesList'
import DetailRecipes from '../screens/recipes/DetailRecipes'
function Routes() {
    return ( <BrowserRouter>
            <Route path='/' exact render={()=>(<>
                <HomeHeader/>
                <HomeContent/>
            </>)}/>

            <Route path='/recipes' exact render={()=>(
                <RecipesList/>
            )}/>

            <Route path='/recipes/:id' render={()=>(
                <DetailRecipes/>
            )}/>

        </BrowserRouter>)
}

export default Routes
