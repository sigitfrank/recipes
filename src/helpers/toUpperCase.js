export const toUpperCase = (string) => {
    let newString = ''
    string.split(' ').map(str => {
        if (str)
            return newString += ` ${str[0].toUpperCase()}${str.slice(1)}`
        return false
    })
    return newString
}
