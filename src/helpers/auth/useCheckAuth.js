import { getItem } from './store'

const useCheckAuth = () => {
    return { loginStatus: getItem('loginStatus'), accessToken: getItem('accessToken') }
}

export default useCheckAuth