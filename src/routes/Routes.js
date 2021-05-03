import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import HomeHeader from '../screens/home/HomeHeader'
import HomeContent from '../screens/home/HomeContent'
function Routes() {
    return ( <BrowserRouter>
            <Route path='/' exact render={()=>(<>
                <HomeHeader/>
                <HomeContent/>
            </>)}/>

        </BrowserRouter>)
}

export default Routes
