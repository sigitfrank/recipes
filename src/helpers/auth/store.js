export const setItem = (key, value) => {
    return localStorage.setItem(key, value)
}
export const getItem = (value) => {
    return localStorage.getItem(value)
}
export const removeItemStorage = (value)=>{
     localStorage.removeItem('loginStatus')
     localStorage.removeItem('accessToken')
     localStorage.removeItem('refreshToken')
     return true
}