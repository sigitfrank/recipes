import axios from "axios"
import registerActionTypes from "../../action-types/auth/Register"
import { REGISTER_ACCOUNT_URL } from "../../api/endpoints"
import toast from 'react-hot-toast';
import { toastStyling } from "../../helpers/toast"

import { validateStateBeforeRegisterUser } from '../../validations/logic/auth/register'
const registerController = async (data) => {
    const { registerDispatcher, newUser } = data
    registerDispatcher({ type: registerActionTypes.CHECK_POST_REGISTER_USER })
    const isStateValid = validateStateBeforeRegisterUser(newUser)
    if (!isStateValid) return false

    try {
        const response = await axios.post(REGISTER_ACCOUNT_URL, newUser)
        registerDispatcher({ type: registerActionTypes.POST_REGISTER_USER, payload: response.data })
        return toast.success(response.data.msg, toastStyling)
    } catch (error) {
        const errorMessage = error.response.data
        if (errorMessage.errors) {
            toast.error(errorMessage.errors[0].msg, toastStyling)
            return false
        }
        toast.error(errorMessage.msg, toastStyling)
        return false
    }

}

export default registerController