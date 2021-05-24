import React, { useEffect, useReducer } from 'react'
import authActionTypes from '../../action-types/auth/Auth'
import loginActionTypes from '../../action-types/auth/Login'
import LoginReducer from '../../reducers/auth/LoginReducer'
import { togglePassword } from '../../helpers/togglePassword'
import { initialLoginState } from '../../states/auth/Login'
import InvalidFeedback from '../../validations/components/InvalidFeedback'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import loginWithGoogle from '../../controllers/auth/loginWithGoogle'
import loginWithFacebook from '../../controllers/auth/loginWithFacebook'
import axios from 'axios'
import { GET_LOGIN } from '../../api/endpoints'
import { Toaster } from 'react-hot-toast'
import loginController from '../../controllers/auth/loginController'

function Login({ modalAuthDispatcher }) {
    const [loginState, loginDispatcher] = useReducer(LoginReducer, initialLoginState)
    const { email, password, rememberMe, showPassword } = loginState
    axios.defaults.withCredentials = true
    const loginUser = async () => {
        loginDispatcher({ type: loginActionTypes.CHECK_POST_LOGIN_USER })
        const dataUser = {
            email: email.value,
            password: password.value
        }
        const isLoginSuccess = await loginController({ dataUser })
        if (!isLoginSuccess) return false

        return setTimeout(() => {
            window.location.reload()
        }, 2000);
    }

    useEffect(() => {
        axios.get(GET_LOGIN).then(res => {
            const { isLoggedIn, userData } = res.data
            console.log(isLoggedIn, userData)
        })
    }, [])
    return (
        <>
            <Toaster position='bottom-center' />
            <div className="modal-content">
                <div className="modal-header pb-0">
                    <h5 className="modal-title" id="SignInModalLabel">Welcome Back, Sign in to continue</h5>
                </div>
                <div className="modal-body pt-0">
                    <form action="" autoComplete="off" className="form-login">
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                value={email.value}
                                placeholder="Email"
                                onChange={(e) => loginDispatcher({ type: loginActionTypes.SET_EMAIL, payload: e.target.value })}
                            />
                            {email.error.status && <InvalidFeedback message={email.error.message} isError={email.error.status} />}
                        </div>
                        <div className="form-group">
                            <div className="input-password-container" onClick={(event) => loginDispatcher({ type: loginActionTypes.TOGGLE_PASSWORD, event })}>
                                {togglePassword(showPassword).icon}
                                <input
                                    type={togglePassword(showPassword).type}
                                    value={password.value}
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={(e) => loginDispatcher({ type: loginActionTypes.SET_PASSWORD, payload: e.target.value })} />
                                {password.error.status && <InvalidFeedback message={password.error.message} isError={password.error.status} />}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-check ms-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value={rememberMe}
                                        onChange={() => loginDispatcher({ type: loginActionTypes.SET_REMEMBER_ME })}
                                        id="rememberMe" />
                                    <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <p className="text-end forgot-password">
                                    <a href="/">Forgot Password?</a>
                                </p>
                            </div>
                        </div>
                        <div className="submit-container text-center">
                            <button className="btn login" type="button" onClick={() => loginUser()}>Login</button>
                            <p className="mt-3">Doesn't have an account? <a href="/" onClick={(e) => { e.preventDefault(); modalAuthDispatcher({ type: authActionTypes.TOGGLE_AUTH_MODAL }) }} className="main-color"> Sign up</a></p>
                            <div className="login-social-media-container">
                                <FacebookLogin
                                    appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                                    fields="name,email,picture"
                                    callback={loginWithFacebook}
                                    render={renderProps => (
                                        <span className="login-facebook" disabled={renderProps.disabled} onClick={renderProps.onClick}><FaFacebook /></span>
                                    )}
                                />
                                <GoogleLogin render={renderProps => (
                                    <span onClick={renderProps.onClick} className="login-google" disabled={renderProps.disabled}> <FcGoogle /></span>
                                )} clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} onSuccess={loginWithGoogle} onFailure={loginWithGoogle}>
                                </GoogleLogin>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
