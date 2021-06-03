
const styleInvalidFeedback = (isError, marginLeft = "1rem", marginBottom = "0.9rem") => {
      return {
            display: isError ? 'block' : 'none',
            marginLeft,
            marginBottom
      }
}

export default styleInvalidFeedback