import axios from "axios"
import toast from "react-hot-toast"
import { toastStyling } from "../../helpers/toast"
import { LOGOUT_URL } from "../../api/endpoints"
import { removeItemStorage } from "../../helpers/auth/store"

const logout = () => {
    axios.get(LOGOUT_URL).then(res => {
        removeItemStorage()
        toast.success(res.data.msg, toastStyling)
        setTimeout(() => {
            window.location.href = '/'
        }, 2000);
    }).catch(error => console.log(error))
}
export default logout