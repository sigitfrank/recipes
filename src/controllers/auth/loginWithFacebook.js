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
            const { success, msg, userData, isLoggedIn, accessToken } = response.data
            if (!success) {
                toast.error(msg, toastStyling)
                return false
            }
            setItem('loginStatus', JSON.stringify({ isLoggedIn }))
            setItem('userData', JSON.stringify(userData))
            setItem('accessToken', JSON.stringify(accessToken))
            toast.success(msg, toastStyling)
            setTimeout(() => {
                window.location.reload()
            }, 2000);
            return true

        } catch (error) {
            console.log(error)
        }
    }
    login()
}

export default loginWithFacebook