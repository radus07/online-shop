import React from 'react'
import {Link} from 'react-router-dom'
import './app-header.scss'

export default function AppHeader () {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="collapse navbar-collapse" id="navbarContent">
        <Link to={'/home'} className="navbar-brand">Home</Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Link</a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={'/sign_in'} className="nav-link">Sign in</Link>
          </li>
          <li className="nav-item"><span className="nav-link">or</span></li>
          <li className="nav-item">
            <Link to={'#'} className="nav-link">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
