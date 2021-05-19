export const currentTime = () => {
    const date = new Date()
    return date.getTime()
}
export const getExpiredTime = (expiredTime = 1) => {
    const date = new Date()
    return date.getTime() + expiredTime * 60000
}