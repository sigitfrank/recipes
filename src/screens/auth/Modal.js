import React, {useState} from 'react'
import ReactDom from 'react-dom'
import Login from './Login'
import Register from './Register'
import '../../css/auth/login.css'
function Modal() {
    const [modalAuth, setModalAuth] = useState('login')

    const checkModalAuth = ()=>{
        if(modalAuth === 'login') return <Login setModalAuth={setModalAuth}/>
        return <Register setModalAuth={setModalAuth}/>
    }

    return ReactDom.createPortal(<>
        <div className="modal fade" id="SignInModal" tabIndex="-1" aria-labelledby="SignInModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              {checkModalAuth()}
            </div>
        </div>
    </>, document.querySelector('#modal-signin'))
}

export default Modal
