import { emailValidRegex } from '../../../constants/email'
import { countStringLength } from '../../../helpers/countStringLength'
export const validateStateBeforeRegisterUser = ({ name, email, password, rePassword, termAgreements }) => {
    const nameLength = countStringLength(name)
    const passwordLength = countStringLength(password)
    if (!name) return false
    if (nameLength < 3) return false
    if (!email) return false
    if (!email.match(emailValidRegex)) return false
    if (!password) return false
    if (passwordLength < 8) return false
    if (!rePassword) return false
    if (rePassword !== password) return false
    if (!termAgreements) return false
    return true
}