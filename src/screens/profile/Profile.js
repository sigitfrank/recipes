import React, { useReducer, useState, useEffect, useRef } from 'react'
import jwt_decode from 'jwt-decode'
import '../../css/users/profile.css'
// import getRegistrationStatus from '../../helpers/getRegistrationStatus'
import getDate from '../../helpers/getDate'
import useCheckAuth from '../../helpers/auth/useCheckAuth'
import profileReducer from '../../reducers/user/ProfileReducer'
import { initialProfileState } from '../../states/user/Profile'
import profileActionTypes from '../../action-types/user/Profile'
import InvalidFeedback from '../../validations/components/InvalidFeedback'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import handleProfile from '../../controllers/profile/handleProfile'
import cancelUpdate from '../../controllers/profile/cancelUpdate'
import updateProfile from '../../controllers/profile/updateProfile'
import Fade from 'react-reveal/Fade'

import { Link } from 'react-router-dom'
import axios from 'axios'
import { GET_USER_RECIPES_URL } from '../../api/endpoints'
function Profile() {
    const [editable, setEditable] = useState(false)
    const [userRecipes, setUserRecipes] = useState([])
    const { accessToken } = useCheckAuth()
    const { userData } = jwt_decode(accessToken)
    const { _id, name, email, imageUrl, googleId, createdAt, isUpdated } = userData
    const [profileState, profileDispatcher] = useReducer(profileReducer, initialProfileState)
    const { userName, setInitial } = profileState

    const profileImage = useRef(null)
    const profileImageFile = useRef(null)

    useEffect(() => {
        if (!setInitial)
            profileDispatcher({ type: profileActionTypes.SET_INITIAL_PROFILE_DATA, payload: userData })

    }, [setInitial, userData])


    useEffect(() => {
        const getRecipes = async () => {
            try {
                const response = await axios.get(`${GET_USER_RECIPES_URL}/${_id}`)
                const recipes = response.data.recipes
                setUserRecipes(recipes)
            } catch (error) {
                console.log(error)
            }
        }
        getRecipes()
    }, [_id])

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
                                            isUpdated || !googleId ? (<img src={`${process.env.REACT_APP_BASE_URL_BACKEND}/${imageUrl}`} ref={profileImage} className="img-fluid profile-pic" alt="profile-pic" />) : (<img src={imageUrl} ref={profileImage} className="img-fluid profile-pic" alt="profile-pic" />)
                                        }
                                    </label>
                                    <input id="file-profile-input" onChange={(e) => handleProfile({ profileImage, profileImageFile, e, updateProfile, _id, userName, profileDispatcher, accessToken })} className="form-control mt-2" type="file" />
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
                                    <span>Verified</span>
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
                                            <button className="btn cancel" onClick={() => cancelUpdate({ setEditable, profileDispatcher, userData })}>Cancel</button>
                                            <button className="btn update" onClick={() => updateProfile({ _id, userName, profileImageFile, profileDispatcher, accessToken })}>Update Profile</button>
                                        </>
                                    ) : (<button className="btn edit-profile" onClick={() => setEditable(prevState => !prevState)}>Edit Profile</button>)}
                                </div>
                            </div>
                        </div>

                        <div className="my-recipes">
                            <h2>My Recipes</h2>
                            <div className="row recipes-gallery">
                                {
                                    userRecipes && (<>
                                        {userRecipes.map(recipe => (<div className="col-md-4 col-sm-12" key={recipe._id}>
                                            <div className="card my-3">
                                                <Fade bottom>
                                                    <div className="card-header">
                                                        <img src={`${process.env.REACT_APP_BASE_URL_BACKEND}/${recipe.mainImage}`} alt="popular-recipes" className="w-100" />
                                                        <div className="overlay">
                                                            <span className="author">{recipe.title}</span>
                                                        </div>
                                                    </div>
                                                </Fade>
                                                <Fade bottom>
                                                    <div className="card-body">
                                                        <h4>{recipe.title}</h4>
                                                        <div className="recipes-description">
                                                            <h5>Ingredients</h5>
                                                            <ul>
                                                                {
                                                                    recipe.ingredients.map(ingredient => (<li key={ingredient.id}>{ingredient.value}</li>))
                                                                }

                                                            </ul>
                                                        </div>
                                                        <p className="text-center mt-3 mb-0"> <Link to="/recipes/1" className="main-color"> Read more</Link></p>
                                                    </div>
                                                </Fade>
                                            </div>
                                        </div>))}
                                    </>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Profile
