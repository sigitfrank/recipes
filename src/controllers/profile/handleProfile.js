
const handleProfile = (args) => {
    const {profileImage, profileImageFile, e, updateProfile, _id, userName, profileDispatcher, accessToken} = args
    profileImage.current.src = window.URL.createObjectURL(e.target.files[0])
    profileImageFile.current = e.target.files[0]
    return updateProfile({ _id, userName, profileImageFile, profileDispatcher, accessToken })
}

export default handleProfile