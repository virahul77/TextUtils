import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  function setActiveClass(){
    if(window.location.pathname==='/'){
      document.getElementById('home').classList.add('active');
      document.getElementById('about').classList.remove('active');
    }
    if(window.location.pathname==='/about')
    {
      document.getElementById('home').classList.remove('active');
      document.getElementById('about').classList.add('active');
    }
  }
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className='nav-link' onClick={setActiveClass} id='home' aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' onClick={setActiveClass} id='about' to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-warning" type="submit">
              Search
            </button>
          </form> */}
          
          <div className='form-check form-switch'>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className={`form-check-label text-light text text-${props.mode==='light'?'dark':'light'}`}  htmlFor="flexSwitchCheckDefault">
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
//Declare navbar and aboutText proptype as string. This is for future type safety
// to use this safety function first import PropTypes from "prop-types";
// if we mark an item as isRequired then it will give error if we not parse any prop value or default prop value
Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "About Text Here",
};
//By this method we can set default props value it will taken into auto consideration only if propes are not parsed
