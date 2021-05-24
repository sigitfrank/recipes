import { getItem } from './store'

const useCheckAuth = () => {
    return { loginStatus: getItem('loginStatus'), userData: getItem('userData') }
}

export default useCheckAuth