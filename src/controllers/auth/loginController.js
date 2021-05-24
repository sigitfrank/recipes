import axios from "axios"
import toast from "react-hot-toast"
import { LOGIN_URL } from "../../api/endpoints"
import { emailValidRegex } from "../../constants/email"
import { setItem } from "../../helpers/auth/store"
import { toastStyling } from "../../helpers/toast"

const loginController = async (data) => {
    const { dataUser } = data
    if (!dataUser.email) return false
    if (!dataUser.email.match(emailValidRegex)) return false
    if (!dataUser.password) return false

    const response = await axios.post(LOGIN_URL, dataUser)
    const { success, msg, userData, isLoggedIn, accessToken } = response.data
    if (!success) {
        if (response.data.errors) {
            toast.error(response.data.errors[0].msg, toastStyling)
            return false
        }
        toast.error(msg, toastStyling)
        return false
    }
    setItem('loginStatus', JSON.stringify({isLoggedIn}))
    setItem('userData', JSON.stringify(userData))
    setItem('accessToken', JSON.stringify(accessToken))
    toast.success(msg, toastStyling)
    return true

}

export default loginController