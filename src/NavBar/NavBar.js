import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
      <img class="img-responsive" src="logo_sphere_white.png" height="40" class="d-inline-block mr-3"  />
        Supercharger Dashboard
      </Link>
    </nav>
  );
}

export default NavBar;