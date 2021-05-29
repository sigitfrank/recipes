import profileActionTypes from '../../action-types/user/Profile'
import { defaultError } from '../../constants/error'
import { countStringLength } from '../../helpers/countStringLength'
import InvalidFeedback from '../../validations/logic/InvalidFeedback'

const ProfileReducer = (state = {}, action) => {
    if (action.type === profileActionTypes.SET_NAME) {
        const userNameLength = countStringLength(action.payload)
        if (!action.payload)  return InvalidFeedback(state, action.payload, 'userName', 'Name cannot be empty')
        if (userNameLength < 3)  return InvalidFeedback(state, action.payload, 'userName', 'Name value min 3 characters')
        return {
            ...state,
             userName: {
                value: action.payload,
                error: defaultError
            }
        }
    }
    
    if(action.type === profileActionTypes.CHECK_PUT_UPDATE_PROFILE){
        const userName = state.userName.value
        const userNameLength = countStringLength(userName)
        if (!userName) return InvalidFeedback(state, userName, 'userName', 'Name cannot be empty')
        if (userNameLength < 3)  return InvalidFeedback(state, userName, 'userName', 'Name value min 3 characters')
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