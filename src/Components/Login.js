import React from 'react';

const Login = () => {
    return(
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
        <div className="row col-sm-12 col-md-7 col-lg-5 mx-auto">
        <div className="card border-primary mb-3 mai-login-form" >
        <div className="card-header">
            <img src="modelis_ai_logo_6.svg" alt="modelis AI Logo"/>
        </div>
        <div className="card-body">
            <h4 className="card-title">Login</h4>
            <div className="card-text">

            <form>
            <fieldset>
                <div className="form-group">
                <label htmlFor="exampleInputEmail1">User ID</label>
                <input type="text" className="form-control mai-email-input" id="userid" aria-describedby="emailHelp" placeholder="Enter User ID" />
                <small id="emailHelp" className="form-text text-muted">You would have received this as part of on-boarding</small>
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control mai-password-input" id="exampleInputPassword1" placeholder="Password" />
                </div>
            </fieldset>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            </div>
        </div>
        </div>
        </div>
        </div>
        </div>        
    );
}

export default Login;


