import React, { useReducer } from 'react'
import ReactDom from 'react-dom'
import ModalAuthReducer from '../../reducers/auth/ModalAuthReducer'
import {intitalAuthState} from '../../states/auth/Modal'
import Login from './Login'
import Register from './Register'
import '../../css/auth/login.css'
import { Toaster } from 'react-hot-toast'

function Modal() {
    const [modalAuthState, modalAuthDispatcher] = useReducer(ModalAuthReducer, intitalAuthState)
    const { isModalLogin } = modalAuthState
    const checkModalAuth = () => {
        if (isModalLogin) return <Login modalAuthDispatcher={modalAuthDispatcher} />
        return <Register modalAuthDispatcher={modalAuthDispatcher} />
    }

    return ReactDom.createPortal(<>
    <Toaster position='bottom-center' />
        <div className="modal fade pe-0" id="SignInModal" tabIndex="-1" aria-labelledby="SignInModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                {checkModalAuth()}
            </div>
        </div>
    </>, document.querySelector('#modal-signin'))
}

export default Modal
