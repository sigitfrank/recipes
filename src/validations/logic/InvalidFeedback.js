const InvalidFeedback = (state, value, key, message, feddbackMessage = '') => {
    return {
        ...state,
        [key]: {
            value: value,
            error: {
                status: true,
                message: message
            }
        },
        feedbackMessage: feddbackMessage
    }
}


export default InvalidFeedback