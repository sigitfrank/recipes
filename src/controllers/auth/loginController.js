import axios from "axios"
import toast from "react-hot-toast"
import { LOGIN_URL } from "../../api/endpoints"
import { emailValidRegex } from "../../constants/email"
import { setItem } from "../../helpers/auth/store"
import { toastStyling } from "../../helpers/toast"

const loginController = async ({ dataUser }) => {
    if (!dataUser.email) return false
    if (!dataUser.email.match(emailValidRegex)) return false
    if (!dataUser.password) return false
    try {
        const response = await axios.post(LOGIN_URL, dataUser)
        const { msg, isLoggedIn, accessToken, refreshToken } = response.data
        setItem('accessToken', accessToken)
        setItem('refreshToken', refreshToken)
        setItem('loginStatus', isLoggedIn)
        toast.success(msg, toastStyling)
        return true
    } catch (error) {
        if (error.response) {
            const errorMessage = error.response.data
            if (errorMessage.errors) {
                toast.error(errorMessage.errors[0].msg, toastStyling)
                return false
            }
            toast.error(errorMessage.msg, toastStyling)
            return false
        } else {
            toast.error(error.message, toastStyling)
        }
    }
}

export default loginController