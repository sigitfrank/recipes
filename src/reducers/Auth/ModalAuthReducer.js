import {TOGGLE_AUTH_MODAL} from '../../action-types/Auth/Auth'
const ModalAuthReducer = (state={}, action)=>{

    if(action.type===TOGGLE_AUTH_MODAL){
        return {...state, isModalLogin:!state.isModalLogin}
    }

}

export default ModalAuthReducer