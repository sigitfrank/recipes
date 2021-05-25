import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { GET_LOGIN_URL } from '../api/endpoints'
import useCheckAuth from '../helpers/auth/useCheckAuth'
export const AuthContext = React.createContext()

function AppProvider({ children }) {
    const { accessToken, loginStatus } = useCheckAuth()
    const [authState, setAuthState] = useState({ isLoggedIn: false, userData: {} })
    useEffect(() => {
        let mounted = true;
        if (loginStatus && JSON.parse(loginStatus).isLoggedIn && mounted) {
            axios.post(GET_LOGIN_URL, { token: accessToken }).then(res => {
                const { isLoggedIn, userData } = res.data
                console.log(userData)
                setAuthState({ isLoggedIn, userData })
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
