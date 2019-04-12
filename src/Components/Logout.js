import React, { Component } from 'react';

import {
  Redirect
} from 'react-router-dom'

class Logout extends Component {
    render() {
        return(<Redirect to="/login"/>)
    }

    componentWillMount() {
        this.props.handleLogout()
    }
}

export default Logout;
    
    
    