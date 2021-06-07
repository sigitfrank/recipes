import updateProfileController from "../user/updateProfileController"

const updateProfile = ({ _id, userName, profileImageFile, profileDispatcher, accessToken }) => {
    const profileData = {
        _id,
        userName: userName.value,
        imageUrl: profileImageFile.current,
    }
    return updateProfileController({ profileDispatcher, profileData, accessToken })
}


export default updateProfile