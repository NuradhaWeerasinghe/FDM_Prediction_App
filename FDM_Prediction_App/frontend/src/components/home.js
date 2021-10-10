import React, { Component } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';
import { useState, useEffect } from "react"
import Nav from './nav'
import {Bar,Pie} from "react-chartjs-2"
import './style.css';


export default class Datat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cl1:Number,
      cl2:Number,
      cl3:Number,
      cl4:Number,
      customers: [],


      clDataNew:{
        labels:["cluster1","cluster2","cluster3","cluster4"],
        datasets:[
        {
        label: "CLUSTER COUNT",
        data:[],
        backgroundColor: "rgba(25,181,254,1)",
        }
          ],

      }, 


      clData1:{
        labels:["cluster1","cluster2","cluster3","cluster4"],
        datasets:[
        {
        label: "MARRIED",
        data:[381,493,101,447],
        backgroundColor: "rgba(25,181,254,1)",
        },
        {
            label: "SINGLE",
            data:[213,264,73,233],
            backgroundColor: "#ffbb11",
        }
    ],

      }, 
      clData2:{
        labels:["cluster1","cluster2","cluster3","cluster4"],
        datasets:[
        {
        label: "CAMP1",
        data:[46,29,51,15],
        backgroundColor: "rgba(25,181,254,1)",
        },
        {
            label: "CAMP2",
            data:[12,5,11,2],
            backgroundColor: "#ffbb11",
        },
        {
            label: "CAMP3",
            data:[43,63,18,39],
            backgroundColor: "rgba(0, 234, 7, 2)",
        },
        {
            label: "CAMP4",
            data:[69,30,23,32],
            backgroundColor: "rgba(200, 24, 79, 2)",
        },
        {
            label: "CAMP5",
            data:[44,28,81,8],
            backgroundColor: "rgba(260, 24, 300, 2)",
        }
    ],

      }, 
      clData3:{
        labels:["cluster1","cluster2","cluster3","cluster4"],
        datasets:[
        {
        label: "WINE",
        data:[4,47,11,80],
        backgroundColor: "rgba(25,181,254,1)",
        },
        {
            label: "MEAT",
            data:[20,8,38,23],
            backgroundColor: "#ffbb11",
        },
        {
            label: "FRUIT",
            data:[20,0,52,4],
            backgroundColor: "rgba(0, 234, 7, 2)",
        },
        {
            label: "FISH",
            data:[0,15,0,162],
            backgroundColor: "rgba(260, 24, 300, 2)",
        }
    ],

      },  
      clData4:{
        labels:["cluster1","cluster2","cluster3","cluster4"],
        datasets:[
        {
        label: "DEAL PURCHASES",
        data:[18,15,4,562],
        backgroundColor: "rgba(25,181,254,1)",
        },
        {
            label: "WEB PURCHASES",
            data:[18,377,4,80],
            backgroundColor: "#ffbb11",
        },
        {
            label: "CATALOG PURCHASES",
            data:[347,39,58,23],
            backgroundColor: "rgba(0, 234, 7, 2)",
        },
        {
            label: "STORE PURCHASES",
            data:[211,326,108,11],
            backgroundColor: "rgba(260, 24, 300, 2)",
        },
    ],

      },   
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleSubmit(e){
    e.preventDefault();
    const {clDataNew} = this.state;
   this.setState({
   clDataNew:{
     ...clDataNew,
     labels:["cluster1","cluster2","cluster3","cluster4"],
     datasets:[{
       ...clDataNew.datasets,
       label:"Amount Profit",
       data:[
         this.state.cl1,
         this.state.cl2,
         this.state.cl3,
         this.state.cl4,
       ],
     }]
   },
   })
  }


  updateState =(a,b,c,d) => {
    this.setState({
        cl1:a,
        cl2:b,
        cl3:c,
        cl4:d,
    })
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
      if(customers.Clusters_1 == "0")
         tot1 =  tot1 + 1;
      })
      this.state.customers.map((customers,index)=>{
        if(customers.Clusters_1 == "1")
           tot2 =  tot2 + 1;
        })
        this.state.customers.map((customers,index)=>{
          if(customers.Clusters_1 == "2")
             tot3 =  tot3 + 1;
          })
          this.state.customers.map((customers,index)=>{
            if(customers.Clusters_1 == "3")
               tot4 =  tot4 + 1;
            })
            document.getElementById("t1").value = tot1
            document.getElementById("t2").value = tot2
            document.getElementById("t3").value = tot3
            document.getElementById("t4").value = tot4
            this.updateState(tot1,tot2,tot3,tot4)
   }

  

  // filter methods
 
  render() {
    const {data,clData1,clData2,clData3,clData4,clDataNew}= this.state;
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
        
        <div class="chr_css"> {/* container of white back card*/}
            {/*<h1>Customer Segmentaion</h1>*/}
            <form onSubmit={(e)=>this.handleSubmit(e)} >
          <input name="cl1" value={this.state.cl1}></input>
          <input name="cl2" value={this.state.cl2}></input>
          <input name="cl3" value={this.state.cl3}></input>
          <input name="cl4" value={this.state.cl4}></input>

          <input id="t1"></input>
          <input id="t2"></input>
          <input id="t3"></input>
          <input id="t4"></input>
          
        </form>
        <button onClick={this.clustermethod}>hello</button>
          <div class="cards">
              <div class="card"> {/* white back  card*/}
                <div className="App">

                <Bar 
                  options={{
                    title:{
                        display:true,
                        text:"Bar Chart for Number of purchases",
                        fontSize:32
                      },
                    }}
                data={clDataNew}/>


                <Bar 
                options={{
                title:{
                    display:true,
                    text:"Bar Chart for Marital Status",
                    fontSize:32
                  },
                }}
                data={clData1}/> 
                </div>
              </div>
              <div class="card"> {/* white back  card*/}
                <div className="App">
                <Bar 
                  options={{
                    title:{
                        display:true,
                        text:"Bar Chart for Accepted campaign",
                        fontSize:32
                      },
                    }}
                data={clData2}/> 
                </div>
              </div>
              <div class="card"> {/* white back  card*/}
                <div className="App">
                <Bar 
                  options={{
                    title:{
                        display:true,
                        text:"Bar Chart for Total Spendings",
                        fontSize:32
                      },
                    }}
                data={clData3}/> 
                </div>
              </div>
              <div class="card"> {/* white back  card*/}
                <div className="App">
                <Bar 
                  options={{
                    title:{
                        display:true,
                        text:"Bar Chart for Number of purchases",
                        fontSize:32
                      },
                    }}
                data={clData4}/> 
                </div>
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