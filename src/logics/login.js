import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
export const getPasswordVisibility = (showPassword) => {
    if (showPassword) {
        return {
            type: 'text',
            icon: <AiOutlineEye className="password-icon" />
        }
    }

    return {
        type: 'password',
        icon: <AiOutlineEyeInvisible className="password-icon" />
    }
}