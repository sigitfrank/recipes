import axios from "axios"
import toast from "react-hot-toast"
import { toastStyling } from "../../helpers/toast"
import { LOGOUT } from "../../api/endpoints"
import { removeItem } from "../../helpers/auth/store"

const logout = () => {
    axios.get(LOGOUT).then(res => {
        removeItem('loginStatus')
        removeItem('userData')
        toast.success('You are logged out', toastStyling)
        setTimeout(() => {
            window.location.href = '/'
        }, 2000);
    }).catch(error => console.log(error))
}
export default logout