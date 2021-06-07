import profileActionTypes from "../../action-types/user/Profile"

const cancelUpdate = ({ setEditable, profileDispatcher, userData }) => {
    setEditable(prevState => !prevState)
    return profileDispatcher({ type: profileActionTypes.SET_INITIAL_PROFILE_DATA, payload: userData })
}
export default cancelUpdate