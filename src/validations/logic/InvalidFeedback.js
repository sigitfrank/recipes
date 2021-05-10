const InvalidFeedback = (state, value, key, message) => {
    return {
        ...state,
        [key]: {
            value:value,
            error:{
                status:true,
                message:message
            }
        }
    }
}


export default InvalidFeedback