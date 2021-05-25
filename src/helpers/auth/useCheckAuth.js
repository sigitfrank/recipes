import { getItem } from './store'

const useCheckAuth = () => {
    return { loginStatus: getItem('loginStatus'), userData: getItem('userData'), accessToken: getItem('accessToken') }
}

export default useCheckAuth