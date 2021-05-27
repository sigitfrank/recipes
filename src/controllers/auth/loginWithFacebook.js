import { LOGIN_WITH_FACEBOOK_URL } from '../../api/endpoints'
import toast from 'react-hot-toast';
import axios from 'axios'
import { toastStyling } from '../../helpers/toast';
import { setItem } from '../../helpers/auth/store';
const loginWithFacebook = (response) => {
    const name = response.name
    const email = response.email
    const facebookId = response.id
    const accessTokenFB = response.accessToken
    const login = async () => {
        try {
            const response = await axios.post(LOGIN_WITH_FACEBOOK_URL, { name, email, accessToken: accessTokenFB, facebookId })
            const { msg, isLoggedIn, accessToken, refreshToken } = response.data
            setItem('accessToken', accessToken)
            setItem('refreshToken', refreshToken)
            setItem('loginStatus', isLoggedIn)
            toast.success(msg, toastStyling)
            return setTimeout(() => {
                window.location.reload()
            }, 2000);

        } catch (error) {
            const errorMessage = error.response.data
            toast.error(errorMessage.msg, toastStyling)
            return false
        }
    }
    login()
}

export default loginWithFacebook