import React, { Component } from 'react';
import { AuthRoute, UnauthRoute } from 'react-router-auth'

import NavBar from './Components/NavBar';

import Login from './Components/Login'
import Logout from './Components/Logout'
import Dashboard from './Components/Dashboard'
import Profile from './Components/Profile'

import axios from 'axios';



// import route Components here
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div>
        <NavBar authenticated={this.state.authenticated}/>
        {/* Routes will go here */}
        <Switch>
          <Route 
            path="/login" 
            render={(props) => <Login {...props} 
              handleAuthenticate={this.handleAuthenticate}
              handleChange={this.handleChange}
              userId={this.state.userId}
              password={this.state.password}
              loginErrMessage={this.state.loginErrMessage}
              authenticated={this.state.authenticated}
            />}
          />
          <AuthRoute path="/dashboard" component={Dashboard} redirectTo="/login" authenticated={this.state.authenticated} />
          <AuthRoute path="/profile" component={Profile} redirectTo="/login" authenticated={this.state.authenticated} />
          <UnauthRoute path="/login" component={Login} redirectTo="/dashboard" authenticated={this.state.authenticated} />
          <Route 
            path="/logout" 
            render={(props) => <Logout {...props} 
              handleLogout={this.handleLogout}
            />}
          />
          <Route exact path="/" render={() => (
            this.state.authenticated ? (
              <Redirect to="/dashboard"/>
              ) : (
                <Redirect to="/login"/>
            )
          )}/>

        </Switch>
      </div>
    );
  }

  // default state object

  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      jwtKey: '',
      password: '',
      cardata: {},
      loginErrMessage: '',
      authenticated: false
    }

    for (let i=0; i < sessionStorage.length; i++) {
      let key=sessionStorage.key(i);
      let value=sessionStorage.getItem(key)
      this.state[key] = value
    }

    // fix the boolean
    if (this.state.authenticated === 'true') {
      this.state.authenticated = true
    } else {
      this.state.authenticated = false
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleAuthenticate = event => {
    event.preventDefault();

    axios.post(
      '/auth',
      null,
      {
        params: {
          userId: this.state.userId,
          password: this.state.password
        }
      }
    )
    .then( (response) => {
      this.setState({
        jwtKey: "JWT " + response.data.token,
        loginErrMessage: '',
        authenticated: true,
        password: null
      });
      sessionStorage.setItem('jwtKey', "JWT " + response.data.token);
      sessionStorage.setItem('authenticated', true);
      sessionStorage.setItem('userId', this.state.userId);
    })
    .catch( (error) => {
      console.log("didn't work")
      console.log(error);
      this.setState({
        loginErrMessage: 'Incorrect userId or password',
        jwtKey: '',
        authenticated: false
      })
      sessionStorage.removeItem('jwtKey');
      sessionStorage.removeItem('authenticated');
      sessionStorage.removeItem('userId');
    });
  }

  handleLogout = () => {
    this.setState({
      loginErrMessage: '',
      jwtKey: '',
      authenticated: false
    })
    sessionStorage.removeItem('jwtKey');
    sessionStorage.removeItem('authenticated');
    sessionStorage.removeItem('userId');

  }

}



export default App;

