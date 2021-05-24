import axios from "axios"
import toast from "react-hot-toast"
import { toastStyling } from "../../helpers/toast"
import { LOGOUT_URL } from "../../api/endpoints"
import { removeItem } from "../../helpers/auth/store"

const logout = () => {
    axios.get(LOGOUT_URL).then(res => {
        console.log(res.data)
        removeItem('loginStatus')
        removeItem('userData')
        toast.success(res.data.msg, toastStyling)
        setTimeout(() => {
            window.location.href = '/'
        }, 2000);
    }).catch(error => console.log(error))
}
export default logout