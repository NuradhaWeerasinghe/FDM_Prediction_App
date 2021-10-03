import React, { Component } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';
import { useState, useEffect } from "react"
import Nav from './nav'
import {Bar,Line} from "react-chartjs-2"
import './style.css';


export default class Datat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      clData1:{
        labels:["cluster1","cluster2","cluster3","cluster4"],
        datasets:[{
          label:"Line Chart For Annual Profits",
          data:[{data:[1,2,3,4]},{data:[3,4,2,1]},{data:[6,6,3,2]}],
        }],
      }, 
      clData2:{
        labels:["cluster1","cluster2","cluster3","cluster4"],
        datasets:[{
          label:"Line Chart For Annual Profits",
          data:[10,3,7,5],
         
        }],
      },
      clData3:{
        labels:["cluster1","cluster2","cluster3","cluster4"],
        datasets:[{
          label:"Line Chart For Annual Profits",
          data:[1,3,2,5],
         
        }],
      }, 
      clData4:{
        labels:["cluster1","cluster2","cluster3","cluster4"],
        datasets:[{
          label:"Line Chart For Annual Profits",
          data:[1,3,2,5],
         
        }],
      },  
    };
  }

  

 

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

  clustermethod= () => {
    let tot1 = 0;
    let tot2 = 0;
    let tot3 = 0;
    let tot4 = 0;
    this.state.customers.map((customers,index)=>{
      if(customers.l3 == "1")
         tot1 =  tot1 + 1;
      })
      this.state.customers.map((customers,index)=>{
        if(customers.l3 == "2")
           tot2 =  tot2 + 1;
        })
        this.state.customers.map((customers,index)=>{
          if(customers.l3 == "3")
             tot3 =  tot3 + 1;
          })
          this.state.customers.map((customers,index)=>{
            if(customers.l3 == "4")
               tot4 =  tot4 + 1;
            })
            document.getElementById("t1").value = tot3
          
   }

  

  // filter methods
 
  render() {
    const {data,clData1,clData2,clData3,clData4}= this.state;
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
                      <option value="Starters">Pending</option>
                      <option value="Mains">Accepted</option>
                      <option value="Deserts">Completed</option>
                      <option value="Beverages">Cancelled</option>
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
          <Bar 
           options={{
             fill:{
                  target:'origin',
                  above:'rgba(0,230,64,1)', 
             },
           title:{
             display:true,
             text:"Line Chart for Annual Profit",
             fontSize:32
           },
           legend:{
             display:true,
             position:"right"
           },
            backgroundColor: "rgba(25,181,254,1)",
            hoverBackgroundColor: "rgba(255,0,255,0.75)",
            hoverBorderWidth: 20,
            hoverBorderColor: "rgba(255,0,255,0.75)",
           borderColor:"rgba(25,181,254,1)",
           borderWidth:2,
           radius:2

           }}
           data={clData1}/> 
          <br></br>
          <Bar 
           options={{
           backgroundColor: [
            "#ffbb11",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0"
          ],
           borderWidth:2,
           radius:2

           }}
           data={clData2}/> 
           <br></br>
           <Bar 
           options={{
             fill:{
                  target:'origin',
                  above:'rgba(0,230,64,1)', 
             },
           title:{
             display:true,
             text:"Line Chart for Annual Profit",
             fontSize:32
           },
           legend:{
             display:true,
             position:"right"
           },
            backgroundColor: "rgba(25,181,254,1)",
            hoverBackgroundColor: "rgba(255,0,255,0.75)",
            hoverBorderWidth: 20,
            hoverBorderColor: "rgba(255,0,255,0.75)",
           borderColor:"rgba(25,181,254,1)",
           borderWidth:2,
           radius:2

           }}
           data={clData3}/> 
           <br></br>
           <Bar 
           options={{
             fill:{
                  target:'origin',
                  above:'rgba(0,230,64,1)', 
             },
           title:{
             display:true,
             text:"Line Chart for Annual Profit",
             fontSize:32
           },
           legend:{
             display:true,
             position:"right"
           },
            backgroundColor: "rgba(25,181,254,1)",
            hoverBackgroundColor: "rgba(255,0,255,0.75)",
            hoverBorderWidth: 20,
            hoverBorderColor: "rgba(255,0,255,0.75)",
           borderColor:"rgba(25,181,254,1)",
           borderWidth:2,
           radius:2

           }}
           data={clData4}/> 
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