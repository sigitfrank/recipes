import React from 'react'
import {Link} from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { RiMenu2Fill } from 'react-icons/ri'
import '../css/navbar.css'
function Navbar() {
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
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/recipes">Recipes</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/blogs">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">About Us</Link>
              </li>
            </ul>
            <form className="d-flex search-form">
              <div className="input-group me-3">
                <button className="btn ms-n5" type="button">
                  <BsSearch />
                </button>
                <input className="form-control" type="search" placeholder="ex: Spaghetti carbonara" />
              </div>
              <button className="btn sign-in" data-bs-toggle="modal" data-bs-target="#SignInModal" type="button">Sign in</button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
