import { TOGGLE_PASSWORD, SET_EMAIL, SET_REMEMBER_ME, SET_PASSWORD, DO_LOGIN } from '../../action-types/Auth/Login'
import InvalidFeedbackAuth from '../../validations/logic/auth/InvalidFeedbackAuth'
import { emailValidRegex } from '../../constants/email'
import { defalutError } from '../../constants/error'

const LoginReducer = (state = {}, action) => {
    if (action.type === SET_EMAIL) {
        if (!action.payload) return InvalidFeedbackAuth(state, action, 'email', 'eEmail', 'Email cannot be empty')

        if (!action.payload.match(emailValidRegex)) return InvalidFeedbackAuth(state, action, 'email', 'eEmail', 'Email must be in valid email format')
        
        return {
            ...state, email: action.payload, errors: {
                ...state.errors,
                eEmail: defalutError,
            }
        }
    }

    if (action.type === SET_PASSWORD) {
        if (!action.payload) return InvalidFeedbackAuth(state, action, 'password', 'ePassword', 'Password cannot be empty')
        
        return {
            ...state, password: action.payload, errors: {
                ...state.errors,
                ePassword: defalutError,
            }
        }
    }

    if (action.type === SET_REMEMBER_ME)  return { ...state, rememberMe: !state.rememberMe }
    

    if (action.type === DO_LOGIN) {
        const email = { payload:state.email }
        const password = { payload:state.password }

        if (!state.email) return InvalidFeedbackAuth(state, email, 'email', 'eEmail', 'Email cannot be empty')
        if (!state.email.match(emailValidRegex)) return InvalidFeedbackAuth(state, email, 'email', 'eEmail', 'Email must be in valid email format')
        if (!state.password) return InvalidFeedbackAuth(state, password, 'password', 'ePassword', 'Password cannot be empty')
        
        alert('Login Process')
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