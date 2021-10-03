import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Boostrap from "bootstrap";
import Select from "react-select";
import API from '../API.js';
import { NavLink } from 'react-router-dom';
import './style.css';
import Nav from './nav'
import axios from "axios";
import CDBSidebarFooter from 'react'


//gender

const maritalStatus = [
  { value: 'In a relationship', label: 'In a relationship' },
  { value: 'Single', label: 'Single' },
];

const promotion_1 = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
];

const promotion_2 = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
];

const promotion_3 = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
];

const promotion_4 = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
];

const promotion_5 = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
];

const NumOfKids = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
  { value: 10, label: '10' },

];

const education = [
  { value: 'Graduation', label: 'Graduation' },
  { value: 'PhD', label: 'PhD' },
  { value: 'Master', label: 'Master' },
  { value: '2n Cycle', label: '2n Cycle' },
  { value: 'Basic', label: 'Basic' },
];

const ageGroup = [
  { value: 'Early Adult', label: 'Early Adult' },
  { value: 'Middle Adult', label: 'Middle Adult' },
  { value: 'MastLate Adulte', label: 'Late Adult' },
  { value: '2n Cycle', label: '2n Cycle' },
  { value: 'Senior Adult', label: 'Senior Adult' },
];

const incomeGroup = [
  { value: 'Low', label: 'Low' },
  { value: 'Low mid', label: 'Low Mid' },
  { value: 'Mid', label: 'Mid' },
  { value: 'Mid high', label: 'Mid high' },
  { value: 'High', label: 'High' },
];

const recencyeGroup = [
  { value: 'Low', label: 'Low' },
  { value: 'Low mid', label: 'Low Mid' },
  { value: 'Mid', label: 'Mid' },
  { value: 'Mid high', label: 'Mid high' },
  { value: 'High', label: 'High' },
];

const totalSpending = [
  { value: 'Low', label: 'Low' },
  { value: 'Low mid', label: 'Low Mid' },
  { value: 'Mid', label: 'Mid' },
  { value: 'Mid high', label: 'Mid high' },
  { value: 'High', label: 'High' },
];

const purchersGroup = [
  { value: 'Low', label: 'Low' },
  { value: 'Average', label: 'Average' },
  { value: 'Mid', label: 'Mid' },
  { value: 'High', label: 'High' },
];


export default class Dash extends React.Component {

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
      this.setState({ Gender: event.value }, () => console.log(this.state));
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
          result: res.data
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
            <Nav />


            <div class="games"> {/* container of white back card*/}
              {/*<h1>Customer Segmentaion</h1>*/}
              <div class="cards">
                <div class="card"> {/* white back  card*/}
                  <div class="card-info">
                    <h2>Customer Segmentation</h2><br></br>

                    {/* beginning of the form  */}
                    <Form>
                      <div className="row">
                        <div className="col-4 marg_l">
                          <label >Relationship status</label>
                        </div>
                        <div className="col-5">
                          <Select options={maritalStatus}
                            onChange={this.onSelectGender} required>
                          </Select><br></br>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-4 marg_l">
                          <label >Promotion 01</label>
                        </div>
                        <div className="col-5">
                          <Select options={promotion_1} required>
                          </Select><br></br>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-4 marg_l">
                          <label >Promotion 02</label>
                        </div>
                        <div className="col-5">
                          <Select options={promotion_2} required>
                          </Select><br></br>
                        </div>
                      </div>

                      <div className="row"> 
                        <div className="col-4 marg_l">
                          <label >Promotion 03</label>
                        </div>
                        <div className="col-5">
                          <Select options={promotion_3}>
                          </Select><br></br>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4 marg_l">
                          <label >Promotion 04</label>
                        </div>
                        <div className="col-5">
                          <Select options={promotion_4}>
                          </Select><br></br>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4 marg_l">
                          <label >Promotion 05</label>
                        </div>
                        <div className="col-5">
                          <Select options={promotion_5}>
                          </Select><br></br>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4 marg_l">
                          <label >Num of kids </label>
                        </div>
                        <div className="col-5">
                          <Select options={NumOfKids}>
                          </Select><br></br>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4 marg_l">
                          <label >Education</label>
                        </div>
                        <div className="col-5">
                          <Select options={education}>
                          </Select><br></br>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4 marg_l">
                          <label >Age Group</label>
                        </div>
                        <div className="col-5">
                          <Select options={ageGroup}>
                          </Select><br></br>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4 marg_l">
                          <label >Income Category</label>
                        </div>
                        <div className="col-5">
                          <Select options={incomeGroup}>
                          </Select><br></br>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4 marg_l">
                          <label >Recency category</label>
                        </div>
                        <div className="col-5">
                          <Select options={recencyeGroup
                          }>
                          </Select><br></br>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4 marg_l">
                          <label >Total Spending</label>
                        </div>
                        <div className="col-5">
                          <Select options={totalSpending}>
                          </Select><br></br>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4 marg_l">
                          <label >Total_Purchases</label>
                        </div>
                        <div className="col-5">
                          <Select options={purchersGroup}>
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

