import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { RiMenu2Fill } from 'react-icons/ri'
import { TYPING_SEARCH_RECIPES, SEARCHING_RECIPES, CHANGE_MENU } from '../action-types/Navbar'
import NavbarReducer from '../reducers/NavbarReducer'
import '../css/navbar.css'

const initialNavbarState = {
  activeMenu: 'Home',
  search: ''
}

function Navbar() {

  const [navbarState, navbarDispatcher] = useReducer(NavbarReducer, initialNavbarState)
  const { activeMenu, search } = navbarState
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/assets/logo.png" alt="bagi-resep" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <RiMenu2Fill />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto py-3 ms-4 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${activeMenu === 'Home' && 'active'}`} onClick={() => navbarDispatcher({ type: CHANGE_MENU, payload: 'Home' })} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeMenu === 'Recipes' && 'active'}`} onClick={() => navbarDispatcher({ type: CHANGE_MENU, payload: 'Recipes' })} to="/recipes">Recipes</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeMenu === 'Blog' && 'active'}`} onClick={() => navbarDispatcher({ type: CHANGE_MENU, payload: 'Blog' })} to="/blogs">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeMenu === 'About Us' && 'active'}`} onClick={() => navbarDispatcher({ type: CHANGE_MENU, payload: 'About Us' })} to="/">About Us</Link>
            </li>
          </ul>
          <form className="d-flex search-form">
            <div className="input-group me-3">
              <button className="btn ms-n5" type="button" onClick={() => navbarDispatcher({ type: SEARCHING_RECIPES, payload: search })}>
                <BsSearch />
              </button>
              <input className="form-control" value={search} onChange={(e) => navbarDispatcher({ type: TYPING_SEARCH_RECIPES, payload: e.target.value })} type="search" placeholder="ex: Spaghetti carbonara" />
            </div>
            <button className="btn sign-in" data-bs-toggle="modal" data-bs-target="#SignInModal" type="button">Sign in</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
