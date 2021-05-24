import React, { useReducer, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { RiLogoutCircleFill, RiMenu2Fill } from 'react-icons/ri'
import { TYPING_SEARCH_RECIPES, SEARCHING_RECIPES } from '../action-types/Navbar'
import NavbarReducer from '../reducers/NavbarReducer'
import '../css/navbar.css'
import { AuthContext } from '../context/AppProvider'
import logout from '../controllers/auth/logout'
import { GET_USERS_URL } from '../api/endpoints'
import authAxios from '../helpers/authAxios'

const initialNavbarState = {
  search: ''
}

function Navbar() {
  const { isLoggedIn, userData } = useContext(AuthContext);
  console.log(userData)
  const [navbarState, navbarDispatcher] = useReducer(NavbarReducer, initialNavbarState)
  const { search } = navbarState

  const getUsers = async () => {
    const { accessToken } = userData
    try {
      const users = await authAxios(accessToken).get(GET_USERS_URL)
      console.log(users)
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
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='active' to="/add-recipes">Add Recipes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='active' to="/profile">Profile</NavLink>
            </li>

            {
              isLoggedIn && (<>
                <li className="nav-item">
                  <span className="nav-link badge">  Hi, {userData.name}!</span>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={() => getUsers()}>Get Users</button>
                </li>
              </>)
            }

          </ul>
          <form className="d-flex search-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group me-3">
              <button className="btn ms-n5" type="button" onClick={() => navbarDispatcher({ type: SEARCHING_RECIPES, payload: search })}>
                <BsSearch />
              </button>
              <input className="form-control" value={search} onKeyUp={(e) => e.key === 'Enter' && navbarDispatcher({ type: SEARCHING_RECIPES, payload: search })} onChange={(e) => navbarDispatcher({ type: TYPING_SEARCH_RECIPES, payload: e.target.value })} type="search" placeholder="ex: Spaghetti carbonara" />
            </div>
            {isLoggedIn ? (<button className="btn sign-in" onClick={() => logout()} type="button">Logout</button>) : (<button className="btn sign-in" data-bs-toggle="modal" data-bs-target="#SignInModal" type="button">Sign in</button>)}
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
