import loginActionTypes from '../../action-types/auth/Login'
import InvalidFeedback from '../../validations/logic/InvalidFeedback'
import { emailValidRegex } from '../../constants/email'
import { defaultError } from '../../constants/error'

const LoginReducer = (state = {}, action) => {
    if (action.type === loginActionTypes.SET_EMAIL) {
        if (!action.payload) return InvalidFeedback(state, action.payload, 'email', 'Email cannot be empty')

        if (!action.payload.match(emailValidRegex)) return InvalidFeedback(state, action.payload, 'email', 'Email must be in valid email format')

        return {
            ...state, email: {
                value: action.payload,
                error: defaultError
            }
        }
    }

    if (action.type === loginActionTypes.SET_PASSWORD) {
        if (!action.payload) return InvalidFeedback(state, action.payload, 'password', 'Password cannot be empty')

        return {
            ...state, password: {
                value: action.payload,
                error: defaultError
            }
        }
    }

    if (action.type === loginActionTypes.SET_REMEMBER_ME) return { ...state, rememberMe: !state.rememberMe }

    if (action.type === loginActionTypes.CHECK_POST_LOGIN_USER) {
        const email = state.email.value
        const password = state.password.value
        if (!email) return InvalidFeedback(state, email, 'email', 'Email cannot be empty')
        if (!email.match(emailValidRegex)) return InvalidFeedback(state, email, 'email', 'Email must be in valid email format')
        if (!password) return InvalidFeedback(state, password, 'password', 'Password cannot be empty')

        return { ...state }
    }

    if (action.type === loginActionTypes.POST_LOGIN_USER) {
        return {
            ...state,
            feedbackMessage: action.payload,
        }
    }

    if (action.type === loginActionTypes.TOGGLE_PASSWORD) {
        if (typeof action.event.target.className.baseVal !== 'undefined') {
            return { ...state, showPassword: !state.showPassword }
        }
    }

    return state
}

export default LoginReducer