import React from "react"
import { Link } from "gatsby"
import { FaAlignJustify } from "react-icons/fa"
import logo from "../assets/images/logo.svg"
import { useState } from "react"

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav>
      <div className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" onClick ={ () => { setShow(false) }}>
              <img src={logo} alt="simply recipe" />
            </Link>
            <button className="nav-btn" onClick = {() => setShow(!show)}>
              <FaAlignJustify />
            </button>
          </div>
          <div className={show? "nav-links show-links":"nav-links"}>
            <Link 
            to="/" 
            className="nav-link" 
            activeClassName="active-link" 
            onClick ={ () => { setShow(false) }}>
              home
            </Link>
            <Link
              to="/recipes"
              className="nav-link"
              activeClassName="active-link"
              onClick ={ () => { setShow(false) }}
            >
              Recipes
            </Link>
            <Link to="/tags" className="nav-link" activeClassName="active-link" onClick ={ () => { setShow(false) }}>
              tag
            </Link>
            <Link
              to="/about"
              className="nav-link"
              activeClassName="active-link"
              onClick ={ () => { setShow(false) }}
            >
              about
            </Link>
            <div className="nav-link cotact-link">
              <Link to="/contact" className="btn" activeClassName="active-link" onClick ={ () => { setShow(false) }}>
                contact
              </Link>
            </div>
          </div>
        </div>
      </div>{" "}
    </nav>
  )
}

export default Navbar
