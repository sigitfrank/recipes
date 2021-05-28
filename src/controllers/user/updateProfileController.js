import { validateStateBeforeUpdateProfile } from "../../validations/logic/user/updateProfile"
import axios from "axios"
import profileActionTypes from "../../action-types/user/Profile"
import { UPDATE_USER_URL } from "../../api/endpoints"
import toast from 'react-hot-toast';
import { toastStyling } from "../../helpers/toast"
import { setItem } from "../../helpers/auth/store";
const updateProfileController = async (data) => {
    const { profileDispatcher, profileData } = data
    const user = {
        _id: profileData._id,
        name: profileData.userName
    }
    const isStateValid = validateStateBeforeUpdateProfile(profileData)
    if (!isStateValid) return false
    try {
        const response = await axios.put(UPDATE_USER_URL, user)
        const { accessToken } = response.data
        profileDispatcher({ type: profileActionTypes.PUT_UPDATE_USER, payload: response.data })
        setItem('accessToken', accessToken)
        toast.success(response.data.msg, toastStyling)
        return setTimeout(() => {
            window.location.reload()
        }, 2000);
    } catch (error) {
        const errorMessage = error.response.data
        toast.error(errorMessage.msg, toastStyling)
        return false
    }
}

export default updateProfileController