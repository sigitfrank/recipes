import authActionTypes from '../../action-types/auth/Auth'
const ModalAuthReducer = (state = {}, action) => {

    if (action.type === authActionTypes.TOGGLE_AUTH_MODAL) {
        return { ...state, isModalLogin: !state.isModalLogin }
    }

}

export default ModalAuthReducer