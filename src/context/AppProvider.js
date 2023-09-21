import axios from 'axios'
import jwt_decode from 'jwt-decode'
import React, { useState, useEffect } from 'react'
import { GET_LOGIN_URL } from '../api/endpoints'
import { removeItemStorage } from '../helpers/auth/store'
import useCheckAuth from '../helpers/auth/useCheckAuth'

export const AuthContext = React.createContext()

function AppProvider({ children }) {
    const { loginStatus, accessToken } = useCheckAuth()

    const [authState, setAuthState] = useState({ isLoading: false, isLoggedIn: false, user: {} })
    useEffect(() => {
        let mounted = true;
        setAuthState({ isLoading: true, isLoggedIn: false, user: {} })
        if (JSON.parse(loginStatus) && mounted) {
            axios.post(GET_LOGIN_URL, { token: accessToken }).then(res => {
                const { isLoggedIn, accessToken } = res.data
                const userData = jwt_decode(accessToken)
                setAuthState({ isLoading: false, isLoggedIn, user: userData })
            }).catch(error => {
                alert('Session has expired, please re-login')
                removeItemStorage()
                if (error.response) {
                    const errorMessage = error.response.data
                    console.log(errorMessage.msg)
                }
                setAuthState({ isLoading: false, isLoggedIn: false, user: {} })
                setTimeout(() => {
                    window.location.href = '/'
                }, 1000);
            })
        } else {
            setAuthState({ isLoading: false, isLoggedIn: false, user: {} })
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
