import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
function RegisterModal({ setModalAuth }) {

    const showLoginModal = (e) => {
        e.preventDefault()
        setModalAuth('login')
    }


    return (<div className="modal-content">
        <div className="modal-header pb-0">
            <h5 className="modal-title" id="SignInModalLabel">Welcome Abroad, Sign up to explore</h5>
        </div>
        <div className="modal-body pt-0">
            <form action="" autoComplete="off" className="form-login">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" />
                    <input type="email" className="form-control" placeholder="Email" />
                    <div className="input-password-container">
                        <AiOutlineEye className="show-password-icon" />
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="input-password-container">
                        <AiOutlineEyeInvisible className="show-password-icon" />
                        <input type="password" className="form-control" placeholder="Re-enter Password" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-check ms-2">
                            <input className="form-check-input" type="checkbox" id="terms-agreement" />
                            <label className="form-check-label" htmlFor="terms-agreement">
                                I agree to all statements in the Terms of Service
                                    </label>
                        </div>
                    </div>
                </div>
                <div className="submit-container text-center my-3">
                    <button className="btn login">Sign Up</button>
                    <p className="mt-3">Already Have an Account? <a href="/" onClick={(e) => showLoginModal(e)} className="main-color">Sign In</a></p>
                </div>
            </form>
        </div>
    </div>
    )
}

export default RegisterModal
