import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1><a className="navbar-brand" href="/">{props.title}</a></h1>
       

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
         
        </div>
      </nav>
    </>
  )
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
};
