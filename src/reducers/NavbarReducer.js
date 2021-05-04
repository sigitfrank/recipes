
import { TYPING_SEARCH_RECIPES, SEARCHING_RECIPES, CHANGE_MENU } from '../action-types/Navbar'
const NavbarReducer = (state = {}, action) => {
    if (action.type === TYPING_SEARCH_RECIPES) {

        return { ...state, search: action.payload }
    }

    if (action.type === SEARCHING_RECIPES) {
        alert(`Searching recipes: ${action.payload}`)
        return { ...state, search: '' }
    }

    if (action.type === CHANGE_MENU) {
        return { ...state, activeMenu: action.payload }
    }
    return state
}

export default NavbarReducer