import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Boostrap from "bootstrap";
import Select from "react-select";
import API from '../API.js';
import { NavLink } from 'react-router-dom';
import './style.css';

import axios from "axios";



//gender
const genderValues = [
  { value: 1998, label: '1998' },
  { value: 2007, label: '2007' },
  { value: 1000, label: '1000' },
];

export default class homet extends React.Component {

  constructor(props) {
    super(props);
    this.onSelectGender = this.onSelectGender.bind(this);
   
    this.state = {
        Gender: 0,
       
    };

    this.GetDetails = this.GetDetails.bind(this)
}

onSelectGender = (event) => {
  if (event) {
      console.log('value', parseInt(event.value));
      this.setState({ Gender: event.value },() => console.log(this.state));
  }
};

onsubmit = (event) => {
  event.preventDefault()
  let headers = new Headers();

  headers.append('Origin', 'http://localhost:3000');
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  let formdata = new FormData();
  formdata.append('Gender', 'aa')

  const requestOptions = {

      method: 'POST',
      headers: headers,
      mode: 'no-cors',
      body: formdata

  };

  fetch('http://127.0.0.1:5000/api/users', requestOptions).then(response => console.log(response));

}





GetDetails() {

  let formData = new FormData();
  formData.append('Gender', this.state.Gender);
  
      console.log('I was here')
  API.getPrediction(formData)
      .then(res => {
         this.setState({
             result:res.data
         })
      })
    }

  /* Frontend output */
  render() {
    return (
      <div>
        <main>
        {/* beginning of back  */}
          <section class="glass">

            {/* beginning of left nav  */}
            <div class="dashboard">
              <Link to= "/chart" class="card_btn" ><label>Hello </label></Link>
              <Link to= "/chart" class="card_btn" ><label>Hello </label></Link>
              <Link to= "/chart" class="card_btn" ><label>Hello </label></Link>
            </div>
            
            <div class="games"> {/* container of white back card*/}
              {/*<h1>Customer Segmentaion</h1>*/}
              <div class="cards">
                <div class="card"> {/* white back  card*/}
                  <div class="card-info">
                    <h2>Customer Segmentation</h2><br></br>

                    <Form>
                      <div className="row">
                        <div className="col-4">
                          <label >Customer Name</label>
                        </div>
                        <div className="col-6">
                          <Select options={genderValues}
                          onChange={this.onSelectGender} required>
                          </Select><br></br>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-4">
                          <label >Customer Age</label>
                        </div>
                        <div className="col-6">
                          <Select options={genderValues} required>
                          </Select><br></br>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-4">
                          <label >Monthly Income</label>
                        </div>
                        <div className="col-6">
                          <Select options={genderValues} required>
                          </Select><br></br>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-4">
                          <label >Marital Status</label>
                        </div>
                        <div className="col-6">
                          <Select options={genderValues}>
                          </Select><br></br>
                        </div>
                      </div> 
                      <center>
                        
                      <button className="btn-grad" type="button" onClick={this.GetDetails}>PREDICT</button>
                      </center>
                    </Form>
                  </div>
                </div>
                
                <div class="card">
                               
                   <div className="row">
                        <div className="col-5">
                          <label >Customer Segment  : </label>
                        </div>
                        <div className="col-6">
                        <label >{this.state.result}</label>
                        </div>
                      </div>

                </div>
              </div>
            </div>
          </section>
        </main>
        {/*<div class="circle1"></div>
        <div class="circle2"></div>*/}

      </div>
    );
  }
}

