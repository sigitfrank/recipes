import React, { useReducer } from 'react'
import authActionTypes from '../../action-types/auth/Auth'
import loginActionTypes from '../../action-types/auth/Login'
import socialMediaActionTypes from '../../action-types/auth/SocialMedia'
import LoginReducer from '../../reducers/auth/LoginReducer'
import SocialMediaReducer from '../../reducers/auth/SocialMediaReducer'
import { togglePassword } from '../../helpers/togglePassword'
import { initialLoginState } from '../../states/auth/Login'
import { initialSocialMediaState } from '../../states/auth/SocialMedia'
import InvalidFeedback from '../../validations/components/InvalidFeedback'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

function Login({ modalAuthDispatcher }) {
    const [loginState, loginDispatcher] = useReducer(LoginReducer, initialLoginState)
    const { email, password, rememberMe, showPassword } = loginState

    const [socialMediaState, socialMediaDispatcher] = useReducer(SocialMediaReducer, initialSocialMediaState)

    return (<div className="modal-content">
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
                    <button className="btn login" type="button" onClick={() => loginDispatcher({ type: loginActionTypes.DO_LOGIN })}>Login</button>
                    <p className="mt-3">Doesn't have an account? <a href="/" onClick={(e) => { e.preventDefault(); modalAuthDispatcher({ type: authActionTypes.TOGGLE_AUTH_MODAL }) }} className="main-color"> Sign up</a></p>
                    <div className="login-social-media-container">
                        <span className="login-facebook" onClick={() => socialMediaDispatcher({ type: socialMediaActionTypes.LOGIN_FACEBOOK })}>
                            <FaFacebook />
                        </span>
                        <span className="login-google" onClick={() => socialMediaDispatcher({ type: socialMediaActionTypes.LOGIN_GOOGLE })}>
                            <FcGoogle />
                        </span>
                    </div>
                </div>
            </form>
        </div>
    </div>)
}

export default Login
