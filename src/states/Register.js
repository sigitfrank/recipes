export const initialRegisterState = {
    name: '',
    email: '',
    password: '',
    rePassword: '',
    termAgreements: false,
    showPassword: false,
    showRePassword: false,
    errors:{
        eName:{
            error:false,
            message:''        
        },
        eEmail:{
            error:false,
            message:''        
        },
        ePassword:{
            error:false,
            message:''        
        },
        eRePassword:{
            error:false,
            message:''        
        },
        eTermAgreements:{
            error:false,
            message:''        
        },
    }
}