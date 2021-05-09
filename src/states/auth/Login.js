import {defaultError} from '../../constants/error'
export const initialLoginState = {
    email: {
        value:'',
        error:defaultError,
    },
    password:{
        value:'',
        error:defaultError
    },
    rememberMe: false,
    showPassword: false,
}