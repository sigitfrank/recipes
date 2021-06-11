export const setItem = (key, value) => {
    return localStorage.setItem(key, value)
}
export const getItem = (value) => {
    return localStorage.getItem(value)
}
export const removeItemStorage = () => {
    localStorage.removeItem('loginStatus')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    return true
}

export const removeRememberMeDataStorage = () => {
    localStorage.removeItem('rememberAccessToken')
}

export const removeRememberMeStorage = () => {
    localStorage.removeItem('rememberMe')
}