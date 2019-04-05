import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
      <img className="img-responsive" src="logo_sphere_white.png" height="40" className="d-inline-block mr-3"  />
        Supercharger Dashboard
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar7">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse justify-content-stretch" id="navbar7">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
        </li>
        </ul>
    </div>    

    </nav>
  );
}

export default NavBar;


