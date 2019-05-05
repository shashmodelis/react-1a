import React, {Component} from 'react';

import axios from 'axios';

import BarChart from './Charts/BarChart'
import PieChart from './Charts/PieChart'
import LineChart from './Charts/LineChart'
import AreaChart from './Charts/AreaChart'

class Dashboard extends Component {
    render() {
        return(
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <p className="lead">Supercharger Dashboard</p>
        </div>
        <div className="container">        
            <div className="row" >
                <div className="col-lg-3 col-md-12">
                    <div className="card border-primary mb-3" >
                        <div className="card-body">
                            <h4 className="card-title">Victory Bar</h4>
                            <div className="card-text">
                                <BarChart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    <div className="card border-primary mb-3" >
                        <div className="card-body">
                            <h4 className="card-title">Victory Pie</h4>
                            <div className="card-text">
                                <PieChart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    <div className="card border-primary mb-3" >
                        <div className="card-body">
                            <h4 className="card-title">Victory Line</h4>
                            <div className="card-text">
                                <LineChart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    <div className="card border-primary mb-3" >
                        <div className="card-body">
                            <h4 className="card-title">Victory Area</h4>
                            <div className="card-text">
                                <AreaChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

