import { validateStateBeforeUpdateProfile } from "../../validations/logic/user/updateProfile"
import axios from 'axios'
import profileActionTypes from "../../action-types/user/Profile"
import { UPDATE_USER_URL } from "../../api/endpoints"
import toast from 'react-hot-toast';
import { toastStyling } from "../../helpers/toast"
import { setItem } from "../../helpers/auth/store"
const updateProfileController = async (data) => {
    const { profileDispatcher, profileData, accessToken } = data
    const isStateValid = validateStateBeforeUpdateProfile(profileData)
    if (!isStateValid) {
        profileDispatcher({ type: profileActionTypes.CHECK_PUT_UPDATE_PROFILE })
        return false
    }
    try {
        let formData = new FormData()
        formData.append("_id", profileData._id)
        formData.append("name", profileData.userName || null)
        formData.append("image", profileData.imageUrl || null)
        // const response = await authAxios(accessToken).put(UPDATE_USER_URL, user)
        const response = await axios.put(UPDATE_USER_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${accessToken}`
            }
        })
        profileDispatcher({ type: profileActionTypes.PUT_UPDATE_USER, payload: response.data })
        setItem('accessToken', response.data.accessToken)
        toast.success(response.data.msg, toastStyling)
        return setTimeout(() => {
            window.location.reload()
        }, 2000);
    } catch (error) {
        console.log(error)
        const errorMessage = error.response.data
        toast.error(errorMessage.msg, toastStyling)
        return false
    }
}

export default updateProfileController