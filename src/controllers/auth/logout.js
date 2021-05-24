import axios from "axios"
import { LOGOUT } from "../../api/endpoints"
import { removeItem } from "../../helpers/auth/store"

const logout = () => {
    axios.get(LOGOUT).then(res => {
        console.log(res)
        removeItem('loginStatus')
        removeItem('userData')
        setTimeout(() => {
            window.location.href = '/'
        }, 2000);
    }).catch(error => console.log(error))
}
export default logout