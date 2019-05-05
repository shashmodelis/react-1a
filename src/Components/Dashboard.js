import React, {Component} from 'react';

import axios from 'axios';

import BarChart from './Charts/BarChart'
import PieChart from './Charts/PieChart'
import LineChart from './Charts/LineChart'
import AreaChart from './Charts/AreaChart'

class Dashboard extends Component {
    render() {
        return(

<div className="container-fluid main-bg">
  <div className="row content">
    
    <div className="col-sm-12">
      <div className="well">
        <h4>Supercharger Dashboard</h4>
      </div>
      <div className="row card-row">
        <div className="col-sm-3">
            <div className="card border-primary mb-3" >
                <div className="card-body">
                    <h4 className="card-title">Users</h4>
                        <LineChart /> 
                </div>
          </div>
        </div>    
        <div className="col-sm-3">
          <div className="card border-primary mb-3" >
                <div className="card-body">
                    <h4 className="card-title">Actions</h4>
                        <BarChart /> 
                </div>
            </div>
        </div>
        <div className="col-sm-3">
          <div className="card border-primary mb-3" >
                <div className="card-body">
                    <h4 className="card-title">Sessions</h4>
                        <PieChart />
                </div>
            </div>
        </div>
        <div className="col-sm-3">
                    <h4>Referrals</h4>
                    <AreaChart /> 
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="well">
            <p>Text</p> 
            <p>Text</p> 
            <p>Text</p> 
          </div>
        </div>
        <div className="col-sm-4">
          <div className="well">
            <p>Text</p> 
            <p>Text</p> 
            <p>Text</p> 
          </div>
        </div>
        <div className="col-sm-4">
          <div className="well">
            <p>Text</p> 
            <p>Text</p> 
            <p>Text</p> 
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
          <div className="well">
            <p>Text</p> 
          </div>
        </div>
        <div className="col-sm-4">
          <div className="well">
            <p>Text</p> 
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

