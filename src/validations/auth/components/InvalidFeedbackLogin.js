import React from 'react'
import styleInvalidFeedback from '../logic/styleInvalidFeedback'

const InvalidFeedbackLogin = ({message,isError}) => {
    return (<div className="invalid-feedback" style={styleInvalidFeedback(isError)}>{message}</div>)
}

export default InvalidFeedbackLogin
