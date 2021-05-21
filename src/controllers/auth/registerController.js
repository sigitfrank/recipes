import axios from "axios"
import registerActionTypes from "../../action-types/auth/Register"
import { REGISTER_ACCOUNT_URL } from "../../api/endpoints"
import toast from 'react-hot-toast';
import { toastStyling } from "../../helpers/toast"

import { validateStateBeforeRegisterUser } from '../../validations/components/auth/register'
const registerController = async (data) => {
    const { registerDispatcher, newUser } = data
    registerDispatcher({ type: registerActionTypes.CHECK_POST_REGISTER_USER })
    const isStateValid = validateStateBeforeRegisterUser(newUser)
    if (!isStateValid) return false
    const response = await axios.post(REGISTER_ACCOUNT_URL, newUser)
    registerDispatcher({ type: registerActionTypes.POST_REGISTER_USER, payload: response.data })
    if (!response.data.success) return toast.error(response.data.errors[0].msg, toastStyling)
    return toast.success(response.data.msg, toastStyling)
}

export default registerController