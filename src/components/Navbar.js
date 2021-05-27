import React, { useState, useEffect, useReducer, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { RiMenu2Fill } from 'react-icons/ri'
import { TYPING_SEARCH_RECIPES, SEARCHING_RECIPES } from '../action-types/Navbar'
import NavbarReducer from '../reducers/NavbarReducer'
import '../css/navbar.css'
import { AuthContext } from '../context/AppProvider'
import logout from '../controllers/auth/logout'
import { GET_USERS_URL } from '../api/endpoints'
import authAxios from '../helpers/authAxios'
import Fade from 'react-reveal/Fade'
import checkCurrentaPage from '../helpers/checkCurrentPage'
import initialNavbarState from '../states/navbar'
import SkeletonLoading from './SkeletonLoading'
function Navbar() {
  const [dropdownMenu, setDropdownMenu] = useState(false)
  const { isLoading, isLoggedIn, user } = useContext(AuthContext)
  const userData = user && user.userData
  const [navbarState, navbarDispatcher] = useReducer(NavbarReducer, initialNavbarState)
  const { search } = navbarState
  const getUsers = async () => {
    const { accessToken } = userData
    try {
      const users = await authAxios(accessToken).get(GET_USERS_URL)
    } catch (error) {
      // give user choice to continue request or logout. If continue, then request new token by refreshToken url
      alert('Your session is expired, redirecting to login page')
      logout()
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" >
          <img src="/assets/logo.png" alt="bagi-resep" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <RiMenu2Fill />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto py-3 ms-4 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact activeClassName='active' to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='active' to="/recipes">Recipes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='active' to="/blog">Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='active' to="/about-us">About Us</NavLink>
            </li>
          </ul>
          <form className="d-flex search-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group me-3">
              <button className="btn ms-n5" type="button" onClick={() => navbarDispatcher({ type: SEARCHING_RECIPES, payload: search })}>
                <BsSearch />
              </button>
              <input className="form-control" value={search} onKeyUp={(e) => e.key === 'Enter' && navbarDispatcher({ type: SEARCHING_RECIPES, payload: search })} onChange={(e) => navbarDispatcher({ type: TYPING_SEARCH_RECIPES, payload: e.target.value })} type="search" placeholder="ex: Spaghetti carbonara" />
            </div>
            {isLoading ? (<SkeletonLoading width={100} height={50} />) : isLoggedIn ? (<div className="user-avatar-container dropdown-toggle">
              <span className="greeting">Hi, {userData.name}!</span>
              {
                userData.googleId ? (<img className="user-avatar" onClick={() => setDropdownMenu(prevState => !prevState)} src={`${userData.imageUrl}`} alt="user-avatar" />) : (
                  <img className="user-avatar" onClick={() => setDropdownMenu(prevState => !prevState)} src={`${process.env.REACT_APP_BASE_URL_BACKEND}/uploads/images/${userData.imageUrl}`} alt="user-avatar" />)
              }
              {dropdownMenu && (<Fade cascade top>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ display: 'block' }}>
                  <li> <NavLink className="dropdown-item" to="/profile">Profile</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/add-recipes">Your Recipes</NavLink></li>
                  <li><a className="dropdown-item" href="/">Your Videos</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><span className="dropdown-item" onClick={() => logout()}>Logout</span></li>
                </ul>
              </Fade>)}
            </div>) : (<button className="btn sign-in" data-bs-toggle="modal" data-bs-target="#SignInModal" type="button">Sign in</button>)}
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
