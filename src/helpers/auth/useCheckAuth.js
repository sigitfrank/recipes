import { getItem } from './store'

const useCheckAuth = () => {
    return { isLoggedIn: JSON.parse(getItem('loginStatus')), userData: JSON.parse(getItem('userData')) }
}

export default useCheckAuth