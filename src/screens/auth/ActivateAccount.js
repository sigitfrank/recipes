import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import axios from 'axios'
import '../../css/auth/activate-account.css'
import { ACTIVATE_ACCOUNT_URL, RESEND_EMAIL_ACTIVATION_URL } from '../../api/endpoints'
import toast, { Toaster } from 'react-hot-toast';
import { toastStyling } from '../../helpers/toast'
function ActivateAccount() {
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')
    const { email, token } = useParams()


    useEffect(() => {
        const activateAccount = async () => {
            const response = await axios.put(ACTIVATE_ACCOUNT_URL, { email, token })
            if (!response.data.success) {
                if (response.data.errors) {
                    setMessage(response.data.errors[0].msg)
                    return setError(true)
                }
                setMessage(response.data.msg)
                return setError(true)
            }
            setMessage(response.data.msg)
            return setError(false)
        }

        activateAccount()
    }, [email, token])

    const resendActivationLink = () => {
        axios.post(RESEND_EMAIL_ACTIVATION_URL, { email }).then(response => {
            toast.success(response.data.msg, toastStyling)
        }).catch(error => {
            toast.error(error.message, toastStyling)
        })
    }

    return (<>
        <Toaster position="bottom-center" />
        <div className="acitvate-account">
            <div className="card">
                <h1>{message}</h1>
                {error ? (<button className="btn resend-link" onClick={() => resendActivationLink()}>Resend Link account activation</button>) : ''}
                <NavLink className="btn resend-link" to="/" >
                    Back to Home
                </NavLink>
            </div>
        </div>
    </>
    )
}

export default ActivateAccount
