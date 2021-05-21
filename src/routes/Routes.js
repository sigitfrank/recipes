import React from 'react'
import { Route } from 'react-router-dom'
import HomeHeader from '../screens/home/HomeHeader'
import HomeContent from '../screens/home/HomeContent'
import RecipesList from '../screens/recipes/RecipesList'
import DetailRecipes from '../screens/recipes/DetailRecipes'

import Navbar from '../components/Navbar'
import Blog from '../screens/blog/Blog'
import AboutUs from '../screens/about-us/AboutUs'
import Profile from '../screens/profile/Profile'
import AddRecipes from '../screens/users/AddRecipes'
import ActivateAccount from '../screens/auth/ActivateAccount'

function Routes() {
    return (<>
        <Route path='/' exact render={() => (<>
            <Navbar />
            <HomeHeader />
            <HomeContent />
        </>)} />

        <Route path='/recipes' exact render={() => (<>
            <Navbar />
            <RecipesList />
        </>)} />

        <Route path='/recipes/:id' render={() => (<>
            <Navbar />
            <DetailRecipes />
        </>)} />

        <Route path='/blog' exact render={() => (<>
            <Navbar />
            <Blog />
        </>)} />

        <Route path='/about-us' exact render={() => (<>
            <Navbar />
            <AboutUs />
        </>)} />

        <Route path='/add-recipes' exact render={() => (<>
            <Navbar />
            <AddRecipes />
        </>)} />

        <Route path='/profile' exact render={() => (<>
            <Navbar />
            <Profile />
        </>)} />

        <Route path='/activate/:email/:token' render={() => (
            <ActivateAccount />
        )} />

    </>)
}

export default Routes
