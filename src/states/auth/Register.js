import { defaultError } from '../../constants/error'
export const initialRegisterState = {
    name: {
        value: '',
        error: defaultError
    },
    email: {
        value: '',
        error: defaultError
    },
    password: {
        value: '',
        error: defaultError
    },
    rePassword: {
        value: '',
        error: defaultError
    },
    termAgreements: {
        value: false,
        error: defaultError
    },
    showPassword: false,
    showRePassword: false,
    feedbackMessage:''
}