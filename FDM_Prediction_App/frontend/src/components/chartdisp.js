import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Boostrap from "bootstrap";
import Select from "react-select";
import API from '../API.js';
import './style.css';
import axios from "axios";

import { Chart } from "./Chart";
import { useState, useEffect } from "react"
import Nav from './nav'



function Welcome(props) {
  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch("https://api.coincap.io/v2/assets/?limit=5")
      const data = await res.json()
      setChartData({
        labels: data.data.map((crypto) => crypto.name),/*x labels*/
        datasets: [
          {
            label: "Price Vs Crypto  ",
            data: data.data.map((crypto) => crypto.priceUsd),/*y labels*/
            backgroundColor: [
              "#ffbb11",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ]
          }
        ]
      });
    };
    fetchPrices()
  }, []);

  const [chartData, setChartData] = useState({})
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
            
          
              
              {/*Chart display begining */}
              <div class="cards">
              <div class="card"> {/* white back  card*/}
                <div className="App">
                  <Chart chartData={chartData} />
                </div>
              </div>

              <div class="card">{/* white back  card*/}
              <h1>chart name</h1>
                <div className="App">
                  <Chart chartData={chartData} />
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

export default Welcome;