const handleProfile = ({profileImage, profileImageFile, e, updateProfile}) => {
    profileImage.current.src = window.URL.createObjectURL(e.target.files[0])
    profileImageFile.current = e.target.files[0]
    return updateProfile()
}

export default handleProfile