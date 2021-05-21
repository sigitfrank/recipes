import { LOGIN_WITH_GOOGLE } from '../../api/endpoints'
import axios from 'axios'
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
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    login()
}

export default loginWithGoogle