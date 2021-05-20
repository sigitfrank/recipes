import registerActionTypes from '../../action-types/auth/Register'
import InvalidFeedback from '../../validations/logic/InvalidFeedback'
import { emailValidRegex } from '../../constants/email'
import { defaultError } from '../../constants/error'
import { countStringLength } from '../../helpers/countStringLength'

const RegisterReducer = (state = {}, action) => {
    if (action.type === registerActionTypes.SET_NAME) {
        const nameLength = countStringLength(action.payload)
        if (!action.payload) return InvalidFeedback(state, action.payload, 'name', 'Name cannot be empty')
        if (nameLength < 3) return InvalidFeedback(state, action.payload, 'name', 'Name value min 3 characters')

        return {
            ...state, name: {
                value: action.payload,
                error: defaultError
            }
        }
    }
    if (action.type === registerActionTypes.SET_EMAIL) {

        if (!action.payload) return InvalidFeedback(state, action.payload, 'email', 'Email cannot be empty')

        if (!action.payload.match(emailValidRegex)) return InvalidFeedback(state, action.payload, 'email', 'Email must be in valid email format')

        return {
            ...state, email: {
                value: action.payload,
                error: defaultError
            }
        }
    }
    if (action.type === registerActionTypes.SET_PASSWORD) {
        const rePassword = state.rePassword.value
        const passwordLength = countStringLength(action.payload)
        if (action.payload === rePassword) {
            return {
                ...state,
                rePassword: {
                    value: rePassword,
                    error: defaultError
                },
                password: {
                    value: action.payload,
                    error: { ...state.password.error }
                }
            }
        }
        if (!action.payload) return InvalidFeedback(state, action.payload, 'password', 'Password cannot be empty')
        if (passwordLength < 8) return InvalidFeedback(state, action.payload, 'password', 'Password value min 8 characters')
        return {
            ...state, password: {
                value: action.payload,
                error: defaultError
            }
        }
    }
    if (action.type === registerActionTypes.SET_RE_PASSWORD) {
        const password = state.password.value
        if (action.payload !== password) return InvalidFeedback(state, action.payload, 'rePassword', 'Password does not match')

        return {
            ...state, rePassword: {
                value: action.payload,
                error: defaultError
            }
        }
    }
    if (action.type === registerActionTypes.SET_TERMS_AGREEMENT) {
        return {
            ...state, termAgreements: {
                ...state.termAgreements,
                value: !state.termAgreements.value,
            }
        }
    }

    if (action.type === registerActionTypes.POST_REGISTER_USER) {
        const name = state.name.value
        const email = state.email.value
        const password = state.password.value
        const rePassword = state.rePassword.value
        const termAgreements = state.termAgreements.value
        const nameLength = countStringLength(state.name.value)
        const passwordLength = countStringLength(state.password.value)

        if (!name) return InvalidFeedback(state, name, 'name', 'Name cannot be empty', action.payload)
        if (nameLength < 3) return InvalidFeedback(state, name, 'name', 'Name value min 3 characters', action.payload)
        if (!email) return InvalidFeedback(state, email, 'email', 'Email cannot be empty', action.payload)
        if (!email.match(emailValidRegex)) return InvalidFeedback(state, email, 'email', 'Email must be in valid email format', action.payload)
        if (!password) return InvalidFeedback(state, password, 'password', 'Password cannot be empty', action.payload)
        if (passwordLength < 8) return InvalidFeedback(state, password, 'password', 'Password value min 8 characters', action.payload)
        if (rePassword !== password) return InvalidFeedback(state, rePassword, 'rePassword', 'Password does not match', action.payload)
        if (!termAgreements) return InvalidFeedback(state, termAgreements, 'termAgreements', 'Terms and Agreements must be checked', action.payload)
        return {
            ...state,
            termAgreements: {
                ...state.termAgreements,
                error: defaultError,
            },
            feedbackMessage: action.payload
        }
    }

    if (action.type === registerActionTypes.TOGGLE_PASSWORD) {
        if (typeof action.event.target.className.baseVal !== 'undefined') {
            return { ...state, showPassword: !state.showPassword }
        }
    }
    if (action.type === registerActionTypes.TOGGLE_RE_PASSWORD) {
        if (typeof action.event.target.className.baseVal !== 'undefined') {
            return { ...state, showRePassword: !state.showRePassword }
        }
    }
    return state
}




export default RegisterReducer