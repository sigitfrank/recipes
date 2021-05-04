
import { TYPING_SEARCH_RECIPES, SEARCHING_RECIPES } from '../action-types/Navbar'
const NavbarReducer = (state = {}, action) => {
    if (action.type === TYPING_SEARCH_RECIPES) {
        return { ...state, search: action.payload }
    }

    if (action.type === SEARCHING_RECIPES) {
        alert(`Searching recipes: ${action.payload}`)
        return { ...state, search: '' }
    }

    return state
}

export default NavbarReducer