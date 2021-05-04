import React, { useReducer } from 'react'
import { TOGGLE_AUTH_MODAL } from '../../action-types/Auth/Auth'
import { TOGGLE_PASSWORD, SET_EMAIL, SET_PASSWORD } from '../../action-types/Auth/Login'
import LoginReducer from '../../reducers/Auth/LoginReducer'
import { getPasswordVisibility } from '../../logics/login'

const initialLoginState = {
    email: '',
    password: '',
    showPassword: false,
}

function Login({ modalAuthDispatcher }) {

    const [loginState, loginDispatcher] = useReducer(LoginReducer, initialLoginState)
    const { email, password, showPassword } = loginState

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
                        value={email}
                        placeholder="Email"
                        onChange={(e) => loginDispatcher({ type: SET_EMAIL, payload: e.target.value })}
                    />

                    <div className="input-password-container" onClick={(event) => loginDispatcher({ type: TOGGLE_PASSWORD, event })}>
                        {getPasswordVisibility(showPassword).icon}
                        <input
                            type={getPasswordVisibility(showPassword).type}
                            value={password}
                            className="form-control"
                            placeholder="Password"
                            onChange={(e) => loginDispatcher({ type: SET_PASSWORD, payload: e.target.value })} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="form-check ms-2">
                            <input className="form-check-input" type="checkbox" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">
                                Remember Me
                                        </label>
                        </div>
                    </div>
                    <div className="col-6">
                        <p className="text-end forgot-password">
                            <a href="/">Forgot Password?</a>
                        </p>
                    </div>
                </div>
                <div className="submit-container text-center">
                    <button className="btn login">Login</button>
                    <p className="mt-3">Doesn't have an account? <a href="/" onClick={(e) => { e.preventDefault(); modalAuthDispatcher({ type: TOGGLE_AUTH_MODAL }) }} className="main-color"> Sign up</a></p>
                </div>
            </form>
        </div>
    </div>)
}

export default Login
