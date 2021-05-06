export const initialLoginState = {
    email: '',
    password: '',
    rememberMe: false,
    showPassword: false,
    errors: {
        eEmail:{
            error:false,
            message:''        
        },
        ePassword:{
            error:false,
            message:''        
        },
    }
}