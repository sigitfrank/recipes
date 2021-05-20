import React, { useReducer } from 'react'
import { NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { RiMenu2Fill } from 'react-icons/ri'
import { TYPING_SEARCH_RECIPES, SEARCHING_RECIPES } from '../action-types/Navbar'
import NavbarReducer from '../reducers/NavbarReducer'
import '../css/navbar.css'

const initialNavbarState = {
  search: ''
}

function Navbar() {

  const [navbarState, navbarDispatcher] = useReducer(NavbarReducer, initialNavbarState)
  const { search } = navbarState
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
              <NavLink className="nav-link"  activeClassName='active' to="/recipes">Recipes</NavLink>
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
          </ul>
          <form className="d-flex search-form" onSubmit={(e)=>e.preventDefault()}>
            <div className="input-group me-3">
              <button className="btn ms-n5" type="button" onClick={() => navbarDispatcher({ type: SEARCHING_RECIPES, payload: search })}>
                <BsSearch />
              </button>
              <input className="form-control" value={search} onKeyUp={(e)=> e.key === 'Enter' && navbarDispatcher({type:SEARCHING_RECIPES, payload:search})} onChange={(e) => navbarDispatcher({ type: TYPING_SEARCH_RECIPES, payload: e.target.value })} type="search" placeholder="ex: Spaghetti carbonara" />
            </div>
            <button className="btn sign-in" data-bs-toggle="modal" data-bs-target="#SignInModal" type="button">Sign in</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
