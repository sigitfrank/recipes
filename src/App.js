import React, { useState } from 'react'
import Modal from './screens/auth/Modal'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'
import AppProvider from './context/AppProvider'
import ModalRecipes from './screens/recipes/ModalRecipes'

export const RecipeCarouselContext = React.createContext([])
function App() {
  const [recipesCarousel, setRecipesCarousel] = useState([])
  return (<>
    <BrowserRouter>
      <AppProvider>
        <RecipeCarouselContext.Provider value={{ recipesCarousel, setRecipesCarousel }}>
          <div className="App pb-5">
            <Routes />
          </div>
          <Modal />
          <ModalRecipes />
        </RecipeCarouselContext.Provider>
      </AppProvider>
    </BrowserRouter>
  </>)
}

export default App
