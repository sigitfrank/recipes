import { LOGIN_WITH_GOOGLE_URL } from '../../api/endpoints'
import toast from 'react-hot-toast';
import axios from 'axios'
import { toastStyling } from '../../helpers/toast';
import { setItem } from '../../helpers/auth/store';
const loginWithGoogle = (response) => {
    if (response.error) return console.log('Login cancelled')
    const { profileObj } = response
    const name = profileObj.givenName
    const email = profileObj.email
    const imageUrl = profileObj.imageUrl
    const googleId = response.googleId
    const accessTokenGoogle = response.accessToken
    const login = async () => {
        try {
            const response = await axios.post(LOGIN_WITH_GOOGLE_URL, { name, email, accessToken: accessTokenGoogle, googleId, imageUrl })
            const { msg, userData, isLoggedIn, accessToken } = response.data

            setItem('loginStatus', JSON.stringify({ isLoggedIn }))
            setItem('userData', JSON.stringify(userData))
            setItem('accessToken', accessToken)
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

export default loginWithGoogle