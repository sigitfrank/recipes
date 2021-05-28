import React, { useReducer, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { BsStarFill } from 'react-icons/bs'
import { AiOutlineComment } from 'react-icons/ai'
import '../../css/users/profile.css'
import getRegistrationStatus from '../../helpers/getRegistrationStatus'
import getDate from '../../helpers/getDate'
import useCheckAuth from '../../helpers/auth/useCheckAuth'
import { AiFillEdit } from 'react-icons/ai'
import profileReducer from '../../reducers/user/ProfileReducer'
import { initialProfileState } from '../../states/user/Profile'
import profileActionTypes from '../../action-types/user/Profile'
import InvalidFeedback from '../../validations/components/InvalidFeedback'
import updateProfileController from '../../controllers/user/updateProfileController'
function Profile() {
    const [editable, setEditable] = useState(false)
    const { accessToken } = useCheckAuth()
    const { userData } = jwt_decode(accessToken)
    const { _id, name, email, imageUrl, googleId, createdAt } = userData
    const [profileState, profileDispatcher] = useReducer(profileReducer, initialProfileState)
    const { userName } = profileState
    const updateProfile = () => {

        const profileData = {
            _id,
            userName: userName.value
        }
        return updateProfileController({ profileDispatcher, profileData })
    }

    return (
        <div className="container user-profile">
            <div className="row">
                <div className="col-md-7">
                    <div className="card main">
                        <div className="card-header">
                            {
                                googleId ? (<img src={imageUrl} className="img-fluid profile-pic" alt="profile-pic" />) : (<img src={`${process.env.REACT_APP_BASE_URL_BACKEND}/uploads/images/${imageUrl}`} className="img-fluid profile-pic" alt="profile-pic" />)
                            }
                        </div>
                        <div className="edit-profile-container">
                            <span className="edit-profile-btn" onClick={() => setEditable(prevState => !prevState)}> <AiFillEdit /> Edit</span>
                        </div>
                        <div className="card-body">
                            <ul>
                                {editable ? (<>
                                    <li>
                                        Name:
                                        <input
                                            type="text"
                                            className="form-control w-75 d-inline-block ms-3"
                                            placeholder="enter your name..."
                                            value={userName.value}
                                            onChange={(event) => profileDispatcher({ type: profileActionTypes.SET_NAME, payload: event.target.value })}
                                        />
                                        {userName.error.status && <InvalidFeedback marginLeft="4rem" marginBottom="0" message={userName.error.message} isError={userName.error.status} />}
                                    </li>
                                </>) : (<>
                                    <li>
                                        Name: <span>{name}</span>
                                    </li>
                                </>)}
                                <li>Email:  <span>{email}</span> </li>
                                <li>Member Since: <span>{getDate(createdAt)}</span> </li>
                                <li>Registration Status: <span>{getRegistrationStatus(userData)}</span></li>
                            </ul>
                            <ul>
                                <li>
                                    <div>Badge</div>
                                    <img src="https://images.vexels.com/media/users/3/212679/isolated/preview/9763b142eacea63eef0e268ab4e21052-best-chef-diamond-badge-by-vexels.png" className="profile-badge" alt="profile-badge" />
                                </li>
                                <li><span className="follower">Follower: 219</span> </li>
                                <li><span className="following">Following: 71</span> </li>
                                <li>
                                    {editable ? (<button className="btn update" onClick={() => updateProfile()}>Update Account</button>) : (<button className="btn btn-danger">Delete Account</button>)}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card secondary-top">
                        <div className="card-header">
                            <h5>Achievements</h5>
                        </div>
                        <div className="card-body">
                            <span className="badge-achivements">10 Followers </span>|
                            <span className="badge-achivements">50 Followers </span>|
                            <span className="badge-achivements">100 Followers </span>|
                            <span className="badge-achivements">First Recipe </span>|
                            <span className="badge-achivements">100 Likes </span>|
                            <span className="badge-achivements">1000 Likes </span>|
                        </div>
                    </div>
                    <div className="card secondary-bottom">
                        <div className="card-header">
                            <h5>Best Recipes</h5>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li>
                                    <span className="recipe-title">Nasi Goreng Tenis</span>
                                    <div className="score">
                                        <div className="stars">
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                        </div>
                                        <span className="comments"><AiOutlineComment />: 132</span>
                                    </div>
                                </li>
                                <li>
                                    <span className="recipe-title">Bubur Ayam SD</span>
                                    <div className="score">
                                        <div className="stars">
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                        </div>
                                        <span className="comments"><AiOutlineComment />: 51</span>
                                    </div>
                                </li>
                                <li>
                                    <span className="recipe-title">Ayam Geprek Kamila</span>
                                    <div className="score">
                                        <div className="stars">
                                            <BsStarFill />
                                            <BsStarFill />
                                        </div>
                                        <span className="comments"><AiOutlineComment />: 23</span>
                                    </div>
                                </li>
                                <li>
                                    <span className="recipe-title">Ketoprak Simpang</span>
                                    <div className="score">
                                        <div className="stars">
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                        </div>
                                        <span className="comments"><AiOutlineComment />: 10</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile
