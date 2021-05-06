import { TOGGLE_PASSWORD, SET_EMAIL, SET_REMEMBER_ME, SET_PASSWORD, DO_LOGIN } from '../../action-types/Auth/Login'
import InvalidFeedbackLogin from '../../validations/auth/logic/InvalidFeedbackLogin'
import { emailValidRegex } from '../../constants/email'

const LoginReducer = (state = {}, action) => {
    if (action.type === SET_EMAIL) {
        if (!action.payload) {
            return InvalidFeedbackLogin(state, action, 'email', 'eEmail', 'Email cannot be empty')
        }

        if (!action.payload.match(emailValidRegex)) {
            return InvalidFeedbackLogin(state, action, 'email', 'eEmail', 'Email must be in valid email format')
        }
        return {
            ...state, email: action.payload, errors: {
                ...state.errors,
                eEmail: {
                    error: false,
                    message: ''
                },
            }
        }
    }

    if (action.type === SET_PASSWORD) {
        if (!action.payload) {
            return InvalidFeedbackLogin(state, action, 'password', 'ePassword', 'Password cannot be empty')
        }
        return {
            ...state, password: action.payload, errors: {
                ...state.errors,
                ePassword: {
                    error: false,
                    message: ''
                },
            }
        }
    }

    if (action.type === SET_REMEMBER_ME) {
        return { ...state, rememberMe: !state.rememberMe }
    }

    if (action.type === DO_LOGIN) {
        const {email, password} = state
        if (!email) {
            return InvalidFeedbackLogin(state, action, 'email', 'eEmail', 'Email cannot be empty')
        }

        if (!email.match(emailValidRegex)) {
            return InvalidFeedbackLogin(state, action, 'email', 'eEmail', 'Email must be in valid email format')
        }
        if (!password) {
            return InvalidFeedbackLogin(state, action, 'password', 'ePassword', 'Password cannot be empty')
        }
        alert('Login Process')
    }

    if (action.type === TOGGLE_PASSWORD) {
        if (typeof action.event.target.className.baseVal !== 'undefined') {
            return { ...state, showPassword: !state.showPassword }
        }
    }

    return state
}

export default LoginReducer