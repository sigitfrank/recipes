import { TOGGLE_PASSWORD, SET_EMAIL, SET_REMEMBER_ME, SET_PASSWORD, DO_LOGIN } from '../../action-types/Auth/Login'
const LoginReducer = (state = {}, action) => {
    if (action.type === SET_EMAIL) {
        return { ...state, email: action.payload }
    }

    if (action.type === SET_PASSWORD) {
        return { ...state, password: action.payload }
    }

    if (action.type === SET_REMEMBER_ME) {
        return { ...state, rememberMe: !state.rememberMe }
    }

    if (action.type === DO_LOGIN) {
        alert('Login Process')
        console.log(state)
        return state
    }

    if (action.type === TOGGLE_PASSWORD) {
        if (typeof action.event.target.className.baseVal !== 'undefined') {
            return { ...state, showPassword: !state.showPassword }
        }
    }

    return state
}

export default LoginReducer