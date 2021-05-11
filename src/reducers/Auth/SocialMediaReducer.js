import React from 'react'
import socialMediaActionTypes from '../../action-types/auth/SocialMedia'
const SocialMediaReducer = (state = {}, action) => {

    if (action.type === socialMediaActionTypes.LOGIN_FACEBOOK) {
        alert('Login Facebook')
    }
    if (action.type === socialMediaActionTypes.LOGIN_GOOGLE) {
        alert('Login Google')
    }
    return state
}

export default SocialMediaReducer