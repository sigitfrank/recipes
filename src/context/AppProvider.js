import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { GET_LOGIN } from '../api/endpoints'

export const AuthContext = React.createContext()

function AppProvider({ children }) {
    const [authState, setAuthState] = useState({ isLoggedIn: false, userData: {} })
    useEffect(() => {
        axios.get(GET_LOGIN).then(res => {
            const { isLoggedIn, userData } = res.data
            console.log(isLoggedIn)
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
