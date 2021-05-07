export const countStringLength = (string) => {
    let count = 0;
    string.split('').map(str => {
        return count += str === ' ' ? 0 : 1
    })
    return count

}