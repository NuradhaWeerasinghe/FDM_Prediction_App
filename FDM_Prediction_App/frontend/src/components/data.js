import React, { Component } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';
import { useState, useEffect } from "react"
import Nav from './nav'


//OrderHome class
export default class Datat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    };
  }

  // Creating report 
 

  componentDidMount() {
    this.retrieveCustomers();
  }

  retrieveCustomers() {
    axios.get("http://localhost:8000/customers").then(res => {
      if (res.data.success) {
        this.setState({
          customers: res.data.existingCustomers
        });
        console.log(this.state.customers)
      }
    });
  }
//cluster
  clusterSelect() {

  }

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/order/delete/${id}`).then((res) => {
      toast(`Order Deleted `, {
        type: toast.TYPE.SUCCESS,
        autoClose: 4000
    });  
    
      this.retrieveCustomers();
    })
  }

  // filter methods
 


  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:8000/customers").then(res => {
      if (res.data.success) {
        this.filterData(res.data.existingCustomers, searchKey)
      }
    });

  }
  render() {
    return (
       /* Frontend output */
    <div>
    <main>
   {/* beginning of back  */}
   <section class="glass">
       {/* beginning of left nav  */}
        <div class="">
          <Nav/>

        </div>
        
        <div class="chr_css_table"> {/* container of white back card*/}
            {/*<h1>Customer Segmentaion</h1>*/}
            <div className = "card">
            
            <div className="">
              <h4>Customer Details</h4>
            </div>
            <div className="row">
                <div className="filter-size col-2" >
                    Filter{" "}  
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                      <option value="">All</option>
                      <option value="Starters">Cluster 1</option>
                      <option value="Mains">Cluster 2</option>
                      <option value="Deserts">Cluster 3</option>
                      <option value="Beverages">Cluster 4</option>
                  </select></div>
            <div className="col-4" style={{float:'right', marginLeft:"300px"}}>
              <input
                className="form-control"
                type="search"
                placeholder="search"
                name="searchQuery"
                onChange={this.handleSearchArea}></input>
  
            </div>
  
          </div>
          </div>



          <div className = "card_tab">
          <div className="container">

        {/*Beginning of the table */}
        <table className="table border shadow  table table-striped border " style={{width:'115%',marginLeft:'-90px'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Marital Status</th>
              <th scope="col">Income</th>
              <th scope="col">Num. Kids</th>
              <th scope="col">Num. Teens</th>
              <th scope="col">Recency</th>
              <th scope="col">Wines Expense</th>
              <th scope="col">Fruits Expense</th>
              <th scope="col">Meat Expense</th>
              <th scope="col">Fish Expense</th>
              <th scope="col">Sweet Expense</th>
              <th scope="col">Gold Expense</th>
              <th scope="col">Num Deals Purchases</th>
              <th scope="col">Num Store Purchases</th>
              <th scope="col">Num Catalog Purchases</th>
              <th scope="col">Num Web Purchases</th>
              <th scope="col">Accepted Cmp3</th>
              <th scope="col">Accepted Cmp4</th>
              <th scope="col">Accepted Cmp5</th>
              <th scope="col">Accepted Cmp1</th>
              <th scope="col">Accepted Cmp2</th>
              <th scope="col">Age</th>
              <th scope="col">Education</th>
              <th scope="col">Cluster</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((customers, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{customers._id}</td>
                <td>{customers.Marital_Status}</td>
                <td>{customers.Income}</td>
                <td>{customers.Kidhome}</td>
                <td>{customers.Teenhome}</td>
                <td>{customers.Recency}</td>
                <td>{customers.MntWines}</td>
                <td>{customers.MntFruits}</td>
                <td>{customers.MntMeatProducts}</td>
                <td>{customers.MntFishProducts}</td>
                <td>{customers.MntSweetProducts}</td>
                <td>{customers.MntGoldProds}</td>
                <td>{customers.NumDealsPurchases}</td>
                <td>{customers.NumCatalogPurchases}</td>
                <td>{customers.NumStorePurchases}</td>
                <td>{customers.NumWebPurchases}</td>
                <td>{customers.AcceptedCmp3}</td>
                <td>{customers.AcceptedCmp4}</td>
                <td>{customers.AcceptedCmp5}</td>
                <td>{customers.AcceptedCmp1}</td>
                <td>{customers.AcceptedCmp2}</td>
                <td>{customers.Age}</td>
                <td>{customers.Education1}</td>
                <td>{customers.l3}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>

          </div>
            
           
        </div>
      </section>
    </main>
    {/*<div class="circle1"></div>
      <div class="circle2"></div>*/}

  </div>

      
    )
  }
};