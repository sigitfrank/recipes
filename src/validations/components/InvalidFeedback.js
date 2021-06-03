import React from 'react'
import styleInvalidFeedback from '../logic/styleInvalidFeedback'
const InvalidFeedback = ({ message, isError, marginLeft, marginBottom }) => {
    return (<div className="invalid-feedback" style={styleInvalidFeedback(isError, marginLeft, marginBottom)}>{message}</div>)
}

export default InvalidFeedback
