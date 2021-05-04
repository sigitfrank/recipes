import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
export const togglePassword = (showPassword) => {
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
