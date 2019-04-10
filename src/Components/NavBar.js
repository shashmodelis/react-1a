import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class NavBar extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return(
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
        </ul>
      )
    } else {
      return(
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        </ul>
        )
    }
  }
  render() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
      <img alt='modelis AI' src="modelis_ai_logo_6_white.png" height="50" className="d-inline-block mr-3"  />
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar7">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse justify-content-stretch" id="navbar7">
          {this.renderLinks()}
    </div>    

    </nav>
  );
}
}
export default NavBar;


