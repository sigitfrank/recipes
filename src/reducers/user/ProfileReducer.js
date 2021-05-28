import profileActionTypes from '../../action-types/user/Profile'
import { defaultError } from '../../constants/error'
import { countStringLength } from '../../helpers/countStringLength'

const ProfileReducer = (state = {}, action) => {
    if (action.type === profileActionTypes.SET_NAME) {
        const userNameLength = countStringLength(action.payload)
        if (!action.payload) return {
            ...state,
            userName: {
                value: action.payload,
                error: {
                    status: true,
                    message: 'Name cannot be empty'
                }
            },
        }
        if (userNameLength < 3) return {
            ...state,
            userName: {
                value: action.payload,
                error: {
                    status: true,
                    message: 'Name value min 3 characters'
                }
            },
        }
        return {
            ...state,
             userName: {
                value: action.payload,
                error: defaultError
            }
        }
    }
    
    if(action.type === profileActionTypes.CHECK_POST_UPDATE_PROFILE){
        const userName = state.userName.value
        if (!userName) return {
            ...state,
            userName: {
                value: action.payload,
                error: {
                    status: true,
                    message: 'Name cannot be empty'
                }
            },
        }
    }

    if (action.type === profileActionTypes.PUT_UPDATE_USER) {
        return {
            ...state,
            feedbackMessage: action.payload,
        }
    }
    return state
}

export default ProfileReducer