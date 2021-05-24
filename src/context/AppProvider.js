import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { GET_LOGIN_URL } from '../api/endpoints'

export const AuthContext = React.createContext()

function AppProvider({ children }) {
    const [authState, setAuthState] = useState({ isLoggedIn: false, userData: {} })
    useEffect(() => {
        axios.get(GET_LOGIN_URL).then(res => {
            const { isLoggedIn, userData } = res.data
            setAuthState({ isLoggedIn, userData })
        }).catch(error => console.log(error))
    }, [])
    return (
        <AuthContext.Provider value={authState} >
            {children}
        </AuthContext.Provider>
    )
}

export default AppProvider
