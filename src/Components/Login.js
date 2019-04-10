import React, { Component } from 'react';

import {
  Redirect
} from 'react-router-dom'

class Login extends Component {
    render() {
      if (this.props.authenticated) {
        return(<Redirect to="/dashboard"/>)
      } else {
        return(
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
        <div className="row col-sm-12 col-md-7 col-lg-5 mx-auto">
        <div className="card border-primary mb-3 mai-login-form" >
        <div className="card-header">
            <h4 className="card-header">Supercharger Dashboard</h4>
        </div>
        <div className="card-body">
            <h4 className="card-title">Login</h4>
            <div className="card-text">

            <form onSubmit={this.props.handleAuthenticate}>
            <fieldset>
                <div className="form-group">
                <label htmlFor="exampleInputEmail1">User ID</label>
                <input 
                  type="text" 
                  className="form-control mai-email-input" 
                  name="userId" 
                  aria-describedby="emailHelp" 
                  placeholder="Enter User ID" 
                  value={this.props.userId}
                  onChange={this.props.handleChange}
                />
                <small id="userIdHelp" className="form-text text-muted">You would have received this as part of on-boarding</small>
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input 
                  type="password" 
                  className="form-control mai-password-input" 
                  name="password" 
                  placeholder="Password" 
                  value={this.props.password}
                  onChange={this.props.handleChange}  
                />
                </div>
            </fieldset>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={!this.validateForm()}>
            Submit
            </button>
            <small id="loginErrMessage" className="form-text text-warning">{this.props.loginErrMessage}</small>
            </form>

            </div>
        </div>
        </div>
        </div>
        </div>
        </div>        
    );
        }
    }

    
    validateForm() {
      return this.props.userId.length > 0 && this.props.password.length > 0;
    }
    
    
    


}
export default Login;


