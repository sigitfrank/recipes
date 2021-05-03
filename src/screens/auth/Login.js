import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
function Login({ setModalAuth }) {

    const showRegisterModal = (e) => {
        e.preventDefault()
        setModalAuth('register')
    }

    return (<div className="modal-content">
        <div className="modal-header pb-0">
            <h5 className="modal-title" id="SignInModalLabel">Welcome Back, Sign in to continue</h5>
        </div>
        <div className="modal-body pt-0">
            <form action="" autoComplete="off" className="form-login">
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                    <div className="input-password-container">
                        <AiOutlineEye className="show-password-icon" />
                        {/* <AiOutlineEyeInvisible className="show-password-icon" /> */}
                        <input type="password" className="form-control" placeholder="Password" />
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
                            <a href="/">  Forgot Password?</a>
                        </p>
                    </div>
                </div>
                <div className="submit-container text-center">
                    <button className="btn login">Login</button>
                    <p className="mt-3">Doesn't have an account? <a href="/" onClick={(e) => showRegisterModal(e)} className="main-color"> Sign up</a></p>
                </div>
            </form>
        </div>
    </div>)
}

export default Login
