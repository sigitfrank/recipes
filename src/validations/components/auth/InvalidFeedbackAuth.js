import React from 'react'
import styleInvalidFeedback from '../../logic/auth/styleInvalidFeedback'

const InvalidFeedbackAuth = ({message,isError}) => {
    return (<div className="invalid-feedback" style={styleInvalidFeedback(isError)}>{message}</div>)
}

export default InvalidFeedbackAuth
