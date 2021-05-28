import { countStringLength } from '../../../helpers/countStringLength'
export const validateStateBeforeUpdateProfile = ({ userName }) => {
    const nameLength = countStringLength(userName)
    if (!userName) return false
    if (nameLength < 3) return false
    return true
}