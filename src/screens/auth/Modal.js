import React from 'react'
import ReactDom from 'react-dom'
import Login from './Login'
import Register from './Register'
import '../../css/login.css'
function Modal() {
    return ReactDom.createPortal(<>
        <div className="modal fade" id="SignInModal" tabindex="-1" aria-labelledby="SignInModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
               <Login/>
               {/* <Register/> */}
            </div>
        </div>
    </>, document.querySelector('#modal-signin'))
}

export default Modal
