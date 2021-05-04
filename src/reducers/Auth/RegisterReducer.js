import { SET_NAME, SET_EMAIL, SET_PASSWORD, SET_RE_PASSWORD, SET_TERMS_AGREEMENT, TOGGLE_PASSWORD, TOGGLE_RE_PASSWORD, DO_REGISTER } from '../../action-types/Auth/Register'

const RegisterReducer = (state = {}, action) => {
    if (action.type === SET_NAME)
        return { ...state, name: action.payload }
    if (action.type === SET_EMAIL)
        return { ...state, email: action.payload }
    if (action.type === SET_PASSWORD)
        return { ...state, password: action.payload }
    if (action.type === SET_RE_PASSWORD)
        return { ...state, rePassword: action.payload }
    if (action.type === SET_TERMS_AGREEMENT){
        return { ...state, termAgreements: !state.termAgreements }
    }
    
    if (action.type === DO_REGISTER) {
        alert('Register Process')
        console.log(state)
        return state
    }

    if (action.type === TOGGLE_PASSWORD) {
        if (typeof action.event.target.className.baseVal !== 'undefined') {
            return { ...state, showPassword: !state.showPassword }
        }
    }
    if (action.type === TOGGLE_RE_PASSWORD) {
        if (typeof action.event.target.className.baseVal !== 'undefined') {
            return { ...state, showRePassword: !state.showRePassword }
        }
    }
    return state
}

export default RegisterReducer