import { SET_NAME, SET_EMAIL, SET_PASSWORD, SET_RE_PASSWORD, SET_TERMS_AGREEMENT, TOGGLE_PASSWORD, TOGGLE_RE_PASSWORD, DO_REGISTER } from '../../action-types/Auth/Register'
import InvalidFeedbackAuth from '../../validations/logic/auth/InvalidFeedbackAuth'
import { emailValidRegex } from '../../constants/email'
import { defalutError } from '../../constants/error'
import { countStringLength } from '../../helpers/countStringLength'
const RegisterReducer = (state = {}, action) => {
    if (action.type === SET_NAME) {

        const nameLength = countStringLength(action.payload)

        if (!action.payload) return InvalidFeedbackAuth(state, action, 'name', 'eName', 'Name cannot be empty')
        if (nameLength < 3) return InvalidFeedbackAuth(state, action, 'name', 'eName', 'Name value min 3 characters')

        return {
            ...state, name: action.payload, errors: {
                ...state.errors,
                eName:defalutError,
            }
        }
    }
    if (action.type === SET_EMAIL) {

        if (!action.payload) return InvalidFeedbackAuth(state, action, 'email', 'eEmail', 'Email cannot be empty')

        if (!action.payload.match(emailValidRegex)) return InvalidFeedbackAuth(state, action, 'email', 'eEmail', 'Email must be in valid email format')

        return {
            ...state, email: action.payload, errors: {
                ...state.errors,
                eEmail:defalutError,
            }
        }
    }
    if (action.type === SET_PASSWORD) {
        const rePassword = state.rePassword
        const passwordLength = countStringLength(action.payload)
        if (!action.payload) return InvalidFeedbackAuth(state, action, 'password', 'ePassword', 'Password cannot be empty')
        if (passwordLength < 8) return InvalidFeedbackAuth(state, action, 'password', 'ePassword', 'Password value min 8 characters')
        
        return{
            ...state, password: action.payload, errors: {
                ...state.errors,
                [action.payload === rePassword ? 'eRePassword' :'ePassword']:defalutError,
            }
        }
    }
    if (action.type === SET_RE_PASSWORD) {
        const password = state.password
        if (action.payload !== password) return InvalidFeedbackAuth(state, action, 'rePassword', 'eRePassword', 'Password does not match')

        return {
            ...state, rePassword: action.payload, errors: {
                ...state.errors,
                eRePassword:defalutError,
            }
        }
    }
    if (action.type === SET_TERMS_AGREEMENT) {
        return { ...state, termAgreements: !state.termAgreements }
    }

    if (action.type === DO_REGISTER) {
        const name = { payload: state.name }
        const email = { payload: state.email }
        const password = { payload: state.password }
        const rePassword = { payload: state.rePassword }
        const termAgreements = { payload: state.termAgreements }
        const nameLength = countStringLength(state.name)
        const passwordLength = countStringLength(state.password)

        if (!name) return InvalidFeedbackAuth(state, name, 'name', 'eName', 'Name cannot be empty')
        if (nameLength < 3) return InvalidFeedbackAuth(state, name, 'name', 'eName', 'Name value min 3 characters')
        if (!email) return InvalidFeedbackAuth(state, email, 'email', 'eEmail', 'Email cannot be empty')
        if (!state.email.match(emailValidRegex)) return InvalidFeedbackAuth(state, email, 'email', 'eEmail', 'Email must be in valid email format')
        if (!password) return InvalidFeedbackAuth(state, password, 'password', 'ePassword', 'Password cannot be empty')
        if (passwordLength < 8) return InvalidFeedbackAuth(state, password, 'password', 'ePassword', 'Password value min 8 characters')
        if (state.rePassword !== state.password) return InvalidFeedbackAuth(state, rePassword, 'rePassword', 'eRePassword', 'Password does not match')
        if (!state.termAgreements) return InvalidFeedbackAuth(state, termAgreements, 'termAgreements', 'eTermAgreements', 'Terms and Agreements must be checked')

        alert('Register Process')
        return {
            ...state, errors: {
                ...state.errors,
                eTermAgreements:defalutError,
            }
        }
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