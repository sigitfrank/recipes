const getRegistrationStatus = (userData) => {
    const { googleId, facebookId } = userData
    if (googleId) return 'Google Account'
    if (facebookId) return 'Facebook Account'
    return 'Email Account'
}

export default getRegistrationStatus