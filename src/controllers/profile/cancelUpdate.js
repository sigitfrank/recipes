import profileActionTypes from "../../action-types/user/Profile"

const cancelUpdate = ({setEditable, profileDispatcher}) => {
    setEditable(prevState => !prevState)
    profileDispatcher({ type: profileActionTypes.SET_DEFAULT })
}
export default cancelUpdate