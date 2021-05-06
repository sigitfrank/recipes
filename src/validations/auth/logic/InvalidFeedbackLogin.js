import React from 'react'

const InvalidFeedbackLogin = (state, action, key,keyError, message) => {
    return {
        ...state,
        [key]: action.payload,
        errors: {
            ...state.errors,
            [keyError]: {
                error: true,
                message: message
            }
        }
    }
}


export default InvalidFeedbackLogin