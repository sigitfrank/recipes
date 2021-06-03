import { countStringLength } from '../../../helpers/countStringLength'
export const validateStateBeforeUpdateProfile = ({ userName = '', imageUrl = '' }) => {
    if (imageUrl) return true
    const nameLength = countStringLength(userName)
    if (!userName) return false
    if (nameLength < 3) return false
    return true
}