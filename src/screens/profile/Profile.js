import React, { useReducer, useState, useRef } from 'react'
import jwt_decode from 'jwt-decode'
import '../../css/users/profile.css'
import getRegistrationStatus from '../../helpers/getRegistrationStatus'
import getDate from '../../helpers/getDate'
import useCheckAuth from '../../helpers/auth/useCheckAuth'
import { GiTrophy } from 'react-icons/gi'
import profileReducer from '../../reducers/user/ProfileReducer'
import { initialProfileState } from '../../states/user/Profile'
import profileActionTypes from '../../action-types/user/Profile'
import InvalidFeedback from '../../validations/components/InvalidFeedback'
import updateProfileController from '../../controllers/user/updateProfileController'
import Recipes from '../home/components/Recipes'
function Profile() {
    const [editable, setEditable] = useState(false)
    const { accessToken } = useCheckAuth()
    const { userData } = jwt_decode(accessToken)
    const { _id, name, email, imageUrl, googleId, createdAt, isUpdated } = userData
    const [profileState, profileDispatcher] = useReducer(profileReducer, initialProfileState)
    const { userName } = profileState

    const profileImage = useRef(null)
    const profileImageFile = useRef(null)
    const updateProfile = () => {
        const profileData = {
            _id,
            userName: userName.value,
            imageUrl: profileImageFile.current,
        }
        return updateProfileController({ profileDispatcher, profileData, accessToken })
    }
    const handleProfile = (e) => {
        profileImage.current.src = window.URL.createObjectURL(e.target.files[0])
        profileImageFile.current = e.target.files[0]
        return updateProfile()
    }

    const cancelUpdate = () => {
        setEditable(prevState => !prevState)
        profileDispatcher({ type: profileActionTypes.SET_DEFAULT })
    }

    return (
        <div className="container user-profile">
            <div className="row">
                <div className="col-md-12">
                    <div className="card main">
                        <div className="card-header profile">
                        </div>
                        <div className="card-body profile">
                            <div className="profile-picture">
                                <div className="file-profile-upload">
                                    <label htmlFor="file-profile-input">
                                        {
                                            isUpdated || !googleId ? (<img src={`${process.env.REACT_APP_BASE_URL_BACKEND}/uploads/images/${imageUrl}`} ref={profileImage} className="img-fluid profile-pic" alt="profile-pic" />) : (<img src={imageUrl} ref={profileImage} className="img-fluid profile-pic" alt="profile-pic" />)
                                        }
                                    </label>
                                    <input id="file-profile-input" onChange={(e) => handleProfile(e)} className="form-control mt-2" type="file" />
                                </div>
                            </div>
                            <div className="username-section">
                                <div className="username">
                                    {editable ? (<input
                                        type="text"
                                        className="form-control w-75 d-inline-block mb-2"
                                        placeholder="enter your name..."
                                        value={userName.value}
                                        onChange={(event) => profileDispatcher({ type: profileActionTypes.SET_NAME, payload: event.target.value })}
                                    />) : (name)}
                                    {userName.error.status && <InvalidFeedback marginLeft="0" marginBottom="0" message={userName.error.message} isError={userName.error.status} />}
                                </div>
                                <p className="status">Senior Chef</p>
                                <div className="user-follow">
                                    <div className="following">
                                        <p>165</p>
                                        <p>Following</p>
                                    </div>
                                    <div className="followers">
                                        <p>2817</p>
                                        <p>Followers</p>
                                    </div>
                                    {editable ? (
                                        <>
                                            <button className="btn cancel" onClick={() => cancelUpdate()}>Cancel</button>
                                            <button className="btn update" onClick={() => updateProfile()}>Update Profile</button>
                                        </>
                                    ) : (<button className="btn edit-profile" onClick={() => setEditable(prevState => !prevState)}>Edit Profile</button>)}
                                </div>
                            </div>
                            <div class="card-badge-section desktop">
                                <div className="card user-badge">
                                    <p className="title"> Loyalty Badge</p>
                                    <p> <span className="badge-icon"> <GiTrophy /></span> <span className="badge-title">Friendship</span></p>
                                    <p> <span className="badge-icon"> <GiTrophy /></span> <span className="badge-title">Sharing is Caring</span></p>
                                </div>
                            </div>
                            <div class="badge-section mobile">
                                <p className="title"> Loyalty Badge</p>
                                <p> <span className="badge-icon"> <GiTrophy /></span> <span className="badge-title">Friendship</span></p>
                                <p> <span className="badge-icon"> <GiTrophy /></span> <span className="badge-title">Sharing is Caring</span></p>
                            </div>
                        </div>

                        <div className="my-recipes">
                            <h2>My Recipes</h2>
                            <div className="row recipes-gallery">
                                <Recipes />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
