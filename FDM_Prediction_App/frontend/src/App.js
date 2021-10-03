import React, { Component } from 'react'
import { useState, useEffect } from "react"
import { BrowserRouter, Route } from "react-router-dom";
import './components/style.css';

/* Importing Components */
import Dash from './components/dash'
import chartDisp from './components/chartdisp'
import Landing from './components/landing'
import nav from './components/nav'
import  Datat from "./components/data";
import  Home from "./components/home";
import { Chart } from "./components/Chart";




function App() {

  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch("https://api.coincap.io/v2/assets/?limit=5")
      const data = await res.json()
      setChartData({
        labels: data.data.map((crypto) => crypto.name),
        datasets: [
          {
            label: "Price in USD",
            data: data.data.map((crypto) => crypto.priceUsd),
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

  /* Frontend */
  return (
    <div>
    
      <BrowserRouter>
          {/*Routes for components*/} 
          <Route path="/land" exact component={Dash}></Route>
          <Route path="/" exact component={Landing}></Route>
          <Route path="/predict" exact component={Dash}></Route>
          <Route path="/chart" exact component={chartDisp}></Route>
          <Route path="/nav" exact component={nav}></Route>
          <Route path="/data" exact component={Datat}></Route>
          <Route path="/home" exact component={Home}></Route>
         
    </BrowserRouter>
    </div>
  );
}

export default App;
const data = {
  labels: ['Red', 'Orange', 'Blue'],
  // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  datasets: [
      {
        label: 'Popularity of colours',
        data: [55, 23, 96],
        // you can set indiviual colors for each bar
        backgroundColor: [
          'rgba(255, 255, 255, 0.6)',
          'rgba(255, 255, 255, 0.6)',
          'rgba(255, 255, 255, 0.6)'
        ],
        borderWidth: 1,
      }
  ]
}
