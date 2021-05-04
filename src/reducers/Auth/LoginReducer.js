import {TOGGLE_PASSWORD, SET_EMAIL, SET_PASSWORD} from '../../action-types/Auth/Login'

const LoginReducer = (state={}, action)=>{

    if(action.type === SET_EMAIL){
        return {...state, email:action.payload}
    }
    
    if(action.type === SET_PASSWORD){
        return {...state, password:action.payload}
    }

    if(typeof action.event.target.className.baseVal !== 'undefined'){
        if(action.type===TOGGLE_PASSWORD){
            return {...state, showPassword:!state.showPassword }
        }
    }

    return state
}

export default LoginReducer