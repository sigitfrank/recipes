import React, { useState, useEffect, useRef } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import axios from 'axios'
import { SEND_OTP_URL, VERIFY_PHONE_URL } from '../../api/endpoints'
const firebaseConfig = {
    apiKey: "AIzaSyCTlP3UxHk3om1roLSqAwwiheBcKqohv_c",
    authDomain: "bagiresep-28df8.firebaseapp.com",
    projectId: "bagiresep-28df8",
    storageBucket: "bagiresep-28df8.appspot.com",
    messagingSenderId: "414140988149",
    appId: "1:414140988149:web:f6faed8684c9c8bd82a3bc",
    measurementId: "G-0H09BCJGVG"
}

firebase.initializeApp(firebaseConfig)
function VerifyPhone() {
    const [phoneNumber, setPhoneNumber] = useState('+6282178306187')
    const [recaptchaToken, setRecaptchaToken] = useState('')
    const [sessionInfo, setSessionInfo] = useState('')
    const [verificationCode, setVerificationCode] = useState('')
    let recaptchaContainer = useRef(null)
    useEffect(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(recaptchaContainer, {
            'callback': function (recapchaToken) {
                setRecaptchaToken(recapchaToken)
            }
        })
        window.recaptchaVerifier.render().then(function (widgetId) {
            window.recaptchaWidgetId = widgetId;
        })

    }, [])
    const handleSendCode = async () => {
        const data = {
            phoneNumber,
            recaptchaToken,
        }
        try {
            const response = await axios.post(SEND_OTP_URL, data)
            setSessionInfo(response.data.sessionInfo)
            alert('Otp has bent sent to your number, please verify it!')
        } catch (error) {
            console.log(error.message)
            alert('Failed to send OTP, please try again!')
        }

    }

    const verifCode = async () => {
        const data = {
            verificationCode: verificationCode,
            sessionInfo
        }
        try {
            const response = await axios.post(VERIFY_PHONE_URL, data)
            console.log(response.data)
            alert(`Phone number ${response.data.phoneNumber} verified succesfully! `)
        } catch (error) {
            alert('Failed to verify, please try again!')
        }
    }

    return (
        <div className='container'>
            <div id="recaptcha-container" ref={(ref) => recaptchaContainer = ref}></div> <br />
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="+62802178306187" /><br /><br />
            <button onClick={() => handleSendCode()}>Send OTP</button><br /><br />

            <input type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} /><br /><br />
            <button onClick={() => verifCode()}>verif code</button>

        </div>
    )
}

export default VerifyPhone
