import { LOGIN_WITH_FACEBOOK } from '../../api/endpoints'
import axios from 'axios'
const loginWithFacebook = (response) => {
    const name = response.name
    const email = response.email
    const facebookId = response.id
    const accessToken = response.accessToken
    const login = async () => {
        try {
            const response = await axios.post(LOGIN_WITH_FACEBOOK, { name, email, accessToken, facebookId })
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    login()
}

export default loginWithFacebook