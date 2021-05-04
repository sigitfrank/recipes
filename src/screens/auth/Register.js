import React, { useReducer } from 'react'
import { TOGGLE_AUTH_MODAL } from '../../action-types/Auth/Auth'
import { SET_NAME, SET_EMAIL, SET_PASSWORD, SET_RE_PASSWORD, SET_TERMS_AGREEMENT, TOGGLE_PASSWORD, TOGGLE_RE_PASSWORD, DO_REGISTER } from '../../action-types/Auth/Register'
import RegisterReducer from '../../reducers/Auth/RegisterReducer'
import { togglePassword } from '../../helpers/togglePassword'
import { initialRegisterState } from '../../states/Register'


function RegisterModal({ modalAuthDispatcher }) {

    const [registerState, registerDispatcher] = useReducer(RegisterReducer, initialRegisterState)
    const { name, email, password, rePassword, showPassword, showRePassword, termAgreements } = registerState

    return (<div className="modal-content">
        <div className="modal-header pb-0">
            <h5 className="modal-title" id="SignInModalLabel">Welcome Abroad, Sign up to explore</h5>
        </div>
        <div className="modal-body pt-0">
            <form action="" autoComplete="off" className="form-login">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(event) => registerDispatcher({ type: SET_NAME, payload: event.target.value })}
                        placeholder="Name" />

                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(event) => registerDispatcher({ type: SET_EMAIL, payload: event.target.value })}
                        placeholder="Email" />

                    <div className="input-password-container" onClick={(event) => registerDispatcher({ type: TOGGLE_PASSWORD, event })}>
                        {togglePassword(showPassword).icon}
                        <input
                            type={togglePassword(showPassword).type}
                            className="form-control"
                            value={password}
                            onChange={(event) => registerDispatcher({ type: SET_PASSWORD, payload: event.target.value })}
                            placeholder="Password" />
                    </div>

                    <div className="input-password-container" onClick={(event) => registerDispatcher({ type: TOGGLE_RE_PASSWORD, event })}>
                        {togglePassword(showRePassword).icon}
                        <input
                            type={togglePassword(showRePassword).type}
                            className="form-control"
                            value={rePassword}
                            onChange={(event) => registerDispatcher({ type: SET_RE_PASSWORD, payload: event.target.value })}
                            placeholder="Re-enter Password" />
                    </div>

                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-check ms-2">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                value={termAgreements}
                                onChange={() => registerDispatcher({ type: SET_TERMS_AGREEMENT })}
                                id="terms-agreement" />

                            <label className="form-check-label" htmlFor="terms-agreement">I agree to all statements in the Terms of Service</label>
                        </div>
                    </div>
                </div>
                <div className="submit-container text-center my-3">
                    <button type="button" className="btn login" onClick={() => registerDispatcher({ type: DO_REGISTER })}>Sign Ups</button>
                    <p className="mt-3">Already Have an Account? <a href="/" onClick={(e) => { e.preventDefault(); modalAuthDispatcher({ type: TOGGLE_AUTH_MODAL }) }} className="main-color">Sign In</a></p>
                </div>
            </form>
        </div>
    </div>
    )
}

export default RegisterModal
