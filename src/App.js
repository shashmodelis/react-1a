import React, { Component } from 'react';
import NavBar from './Components/NavBar';

import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Profile from './Components/Profile'


// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
            {/* Routes will go here */}
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route exact={true} path="/" component={Dashboard} />

      </div>
    );
  }
}

export default App;

