import axios from 'axios'
import jwt_decode from 'jwt-decode'
import React, { useState, useEffect } from 'react'
import { GET_LOGIN_URL } from '../api/endpoints'
import useCheckAuth from '../helpers/auth/useCheckAuth'
export const AuthContext = React.createContext()

function AppProvider({ children }) {
    const { loginStatus, accessToken } = useCheckAuth()
    const [authState, setAuthState] = useState({ isLoggedIn: false, userData: {} })
    useEffect(() => {
        let mounted = true;
        if (JSON.parse(loginStatus) && mounted) {
            axios.post(GET_LOGIN_URL, { token: accessToken }).then(res => {
                const { isLoggedIn, accessToken } = res.data
                const userData = jwt_decode(accessToken)
                setAuthState({ isLoggedIn, user:userData })
            }).catch(error => {
                const errorMessage = error.response.data
                console.log(errorMessage.msg)
            })
        }
        return () => {
            mounted = false
        }
    }, [accessToken, loginStatus])
    return (
        <AuthContext.Provider value={authState} >
            {children}
        </AuthContext.Provider>
    )
}

export default AppProvider
