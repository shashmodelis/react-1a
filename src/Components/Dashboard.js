import React, {Component} from 'react';

import axios from 'axios';

class Dashboard extends Component {
    render() {
        return(
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Work in Progress</h1>
            <p className="lead">The dashboard is on its way...</p>
        </div>
        </div>
    );
    }

    getCars = () => {
    
        axios.get(
          '/api/v1/cars',
          {
              headers: {
                  "Authorization": sessionStorage.jwtKey
              }
          }
        )
        .then( (response) => {
            console.log(response.data)
        })
        .catch( (error) => {
          console.log("API call to cars didn't work")
          console.log(error);
        });
      }


      componentDidMount() {
          this.getCars()
      }
}

export default Dashboard;

