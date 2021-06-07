import React, { useReducer, useState, useEffect, useRef } from 'react'
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
import Recipes from '../home/components/Recipes'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import handleProfile from '../../controllers/profile/handleProfile'
import cancelUpdate from '../../controllers/profile/cancelUpdate'
import updateProfile from '../../controllers/profile/updateProfile'
function Profile() {
    const [editable, setEditable] = useState(false)
    const { accessToken } = useCheckAuth()
    const { userData } = jwt_decode(accessToken)
    const { _id, name, email, imageUrl, googleId, createdAt, isUpdated } = userData
    const [profileState, profileDispatcher] = useReducer(profileReducer, initialProfileState)
    const { userName } = profileState

    const profileImage = useRef(null)
    const profileImageFile = useRef(null)

    useEffect(() => {
        profileDispatcher({ type: profileActionTypes.SET_INITIAL_PROFILE_DATA, payload: userData })
    }, [])

    return (
        <div className="container user-profile">
            <div className="row">
                <div className="col-md-12">
                    <div className="card main">
                        <div className="card-header profile">
                            <span className="member-since">Member since {getDate(createdAt)}</span>
                        </div>
                        <div className="card-body profile">
                            <div className="profile-picture">
                                <div className="file-profile-upload">
                                    <label htmlFor="file-profile-input">
                                        {
                                            isUpdated || !googleId ? (<img src={`${process.env.REACT_APP_BASE_URL_BACKEND}/uploads/images/${imageUrl}`} ref={profileImage} className="img-fluid profile-pic" alt="profile-pic" />) : (<img src={imageUrl} ref={profileImage} className="img-fluid profile-pic" alt="profile-pic" />)
                                        }
                                    </label>
                                    <input id="file-profile-input" onChange={(e) => handleProfile({ profileImage, profileImageFile, e, updateProfile })} className="form-control mt-2" type="file" />
                                </div>
                            </div>
                            <div className="username-section">
                                <div className="username">
                                    {editable ? (<input
                                        type="text"
                                        className="form-control w-75 d-inline-block my-2"
                                        placeholder="enter your name..."
                                        value={userName.value}
                                        onChange={(event) => profileDispatcher({ type: profileActionTypes.SET_NAME, payload: event.target.value })}
                                    />) : (name)}
                                    {userName.error.status && <InvalidFeedback marginLeft="0" marginBottom="0" message={userName.error.message} isError={userName.error.status} />}
                                </div>
                                <div className="email">
                                    {email}
                                </div>
                                <div className="status">
                                    <span>Senior Chef</span>
                                    <HiOutlineBadgeCheck />
                                </div>
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
                                            <button className="btn cancel" onClick={() => cancelUpdate({ setEditable, profileDispatcher })}>Cancel</button>
                                            <button className="btn update" onClick={() => updateProfile({ _id, userName, profileImageFile, profileDispatcher, accessToken })}>Update Profile</button>
                                        </>
                                    ) : (<button className="btn edit-profile" onClick={() => setEditable(prevState => !prevState)}>Edit Profile</button>)}
                                </div>
                            </div>
                            <div className="card-badge-section desktop">
                                <div className="card user-badge">
                                    <p className="title"> Loyalty Badge</p>
                                    <p> <span className="badge-icon"> <GiTrophy /></span> <span className="badge-title">Friendship</span></p>
                                    <p> <span className="badge-icon"> <GiTrophy /></span> <span className="badge-title">Sharing is Caring</span></p>
                                </div>
                            </div>
                            <div className="badge-section mobile">
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
