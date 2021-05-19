import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import HomeHeader from '../screens/home/HomeHeader'
import HomeContent from '../screens/home/HomeContent'
import RecipesList from '../screens/recipes/RecipesList'
import DetailRecipes from '../screens/recipes/DetailRecipes'

import Navbar from '../components/Navbar'
import Blog from '../screens/blog/Blog'
import AboutUs from '../screens/about-us/AboutUs'
import Profile from '../screens/profile/Profile'
import AddRecipes from '../screens/users/AddRecipes'

function Routes() {
    return (<BrowserRouter>
        <Navbar />
        <Route path='/' exact render={() => (<>
            <HomeHeader />
            <HomeContent />
        </>)} />

        <Route path='/recipes' exact render={() => (
            <RecipesList />
        )} />

        <Route path='/recipes/:id' render={() => (
            <DetailRecipes />
        )} />

        <Route path='/blog' exact render={() => (
            <Blog />
        )} />

        <Route path='/about-us' exact render={() => (
            <AboutUs />
        )} />

        <Route path='/add-recipes' exact render={() => (
            <AddRecipes />
        )} />

        <Route path='/profile' exact render={() => (
            <Profile />
        )} />

    </BrowserRouter>)
}

export default Routes
