import { LOGIN_WITH_GOOGLE } from '../../api/endpoints'
import toast from 'react-hot-toast';
import axios from 'axios'
import { toastStyling } from '../../helpers/toast';
import { setItem } from '../../helpers/auth/store';
const loginWithGoogle = (response) => {
    if (response.error) return console.log('Login cancelled')
    const { profileObj } = response
    const name = profileObj.givenName
    const email = profileObj.email
    const googleId = response.googleId
    const accessToken = response.accessToken
    const login = async () => {
        try {
            const response = await axios.post(LOGIN_WITH_GOOGLE, { name, email, accessToken, googleId })
            const { success, msg, userData, isLoggedIn } = response.data
            if (!success) {
                toast.error(msg, toastStyling)
                return false
            } 
            setItem('loginStatus', JSON.stringify({isLoggedIn}))
            setItem('userData', JSON.stringify(userData))
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

export default loginWithGoogle