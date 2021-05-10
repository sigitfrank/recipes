import React, { useReducer } from 'react'
import authActionTypes from '../../action-types/auth/Auth'
import registerActionTypes from '../../action-types/auth/Register'
import RegisterReducer from '../../reducers/auth/RegisterReducer'
import { togglePassword } from '../../helpers/togglePassword'
import { initialRegisterState } from '../../states/auth/Register'
import InvalidFeedback from '../../validations/components/InvalidFeedback'

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
                        value={name.value}
                        onChange={(event) => registerDispatcher({ type: registerActionTypes.SET_NAME, payload: event.target.value })}
                        placeholder="Name" />
                    {name.error.status && <InvalidFeedback message={name.error.message} isError={name.error.status} />}
                    <input
                        type="email"
                        className="form-control"
                        value={email.value}
                        onChange={(event) => registerDispatcher({ type: registerActionTypes.SET_EMAIL, payload: event.target.value })}
                        placeholder="Email" />
                    {email.error.status && <InvalidFeedback message={email.error.message} isError={email.error.status} />}

                    <div className="input-password-container" onClick={(event) => registerDispatcher({ type: registerActionTypes.TOGGLE_PASSWORD, event })}>
                        {togglePassword(showPassword).icon}
                        <input
                            type={togglePassword(showPassword).type}
                            className="form-control"
                            value={password.value}
                            onChange={(event) => registerDispatcher({ type: registerActionTypes.SET_PASSWORD, payload: event.target.value })}
                            placeholder="Password" />
                        {password.error.status && <InvalidFeedback message={password.error.message} isError={password.error.status} />}
                    </div>

                    <div className="input-password-container" onClick={(event) => registerDispatcher({ type: registerActionTypes.TOGGLE_RE_PASSWORD, event })}>
                        {togglePassword(showRePassword).icon}
                        <input
                            type={togglePassword(showRePassword).type}
                            className="form-control"
                            value={rePassword.value}
                            onChange={(event) => registerDispatcher({ type: registerActionTypes.SET_RE_PASSWORD, payload: event.target.value })}
                            placeholder="Re-enter Password" />
                        {rePassword.error.status && <InvalidFeedback message={rePassword.error.message} isError={rePassword.error.status} />}
                    </div>

                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-check ms-2">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                value={termAgreements.value}
                                onChange={() => registerDispatcher({ type: registerActionTypes.SET_TERMS_AGREEMENT })}
                                id="terms-agreement" />
                            <label className="form-check-label" htmlFor="terms-agreement">I agree to all statements in the Terms of Service</label>
                            {termAgreements.error.status && <InvalidFeedback message={termAgreements.error.message} isError={termAgreements.error.status} />}
                        </div>
                    </div>
                </div>
                <div className="submit-container text-center my-3">
                    <button type="button" className="btn login" onClick={() => registerDispatcher({ type: registerActionTypes.DO_REGISTER })}>Sign Ups</button>
                    <p className="mt-3">Already Have an Account? <a href="/" onClick={(e) => { e.preventDefault(); modalAuthDispatcher({ type: authActionTypes.TOGGLE_AUTH_MODAL }) }} className="main-color">Sign In</a></p>
                </div>
            </form>
        </div>
    </div>
    )
}

export default RegisterModal
