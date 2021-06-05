import React, { useState, useRef, useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { RiMenu2Fill } from 'react-icons/ri'
import '../css/navbar.css'
import { AuthContext } from '../context/AppProvider'
import logout from '../controllers/auth/logout'
import Fade from 'react-reveal/Fade'
import SkeletonLoading from './SkeletonLoading'
import { SearchContext } from '../routes/Routes'

function Navbar() {
  const [dropdownMenu, setDropdownMenu] = useState(false)
  const { isLoading, isLoggedIn, user } = useContext(AuthContext)
  const { setSearch } = useContext(SearchContext)
  const searchInput = useRef(null)
  const userData = user && user.userData
  const history = useHistory()

  const searchRecipe = () => {
    const search = searchInput.current.value
    setSearch(search)
    searchInput.current.value = ''
    return history.push(`/recipes?search=${search}`)
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
              <button className="btn ms-n5" type="button" onClick={() => searchRecipe()}>
                <BsSearch />
              </button>
              <input className="form-control" type="search" ref={searchInput} onKeyUp={(e) => e.key === 'Enter' && searchRecipe()} placeholder="ex: Spaghetti carbonara" />
            </div>
            {isLoading ? (<SkeletonLoading width={100} height={50} />) : isLoggedIn ? (<div className="user-avatar-container dropdown-toggle">
              <span className="greeting">Hi, {userData.name.length <= 7 ? userData.name : userData.name.substr(0, 7) + '....'}!</span>
              {
                userData.isUpdated || !userData.googleId ? (<img src={`${process.env.REACT_APP_BASE_URL_BACKEND}/uploads/images/${userData.imageUrl}`} className="user-avatar" alt="user-avatar" onClick={() => setDropdownMenu(prevState => !prevState)} />) : (<img src={userData.imageUrl} className="user-avatar" alt="user-avatar" onClick={() => setDropdownMenu(prevState => !prevState)} />)
              }
              {dropdownMenu && (<Fade cascade top>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ display: 'block' }}>
                  <li><NavLink className="dropdown-item" to="/profile">Profile</NavLink></li>
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
