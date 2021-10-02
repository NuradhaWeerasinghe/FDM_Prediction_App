import React, { Component } from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Boostrap from "bootstrap";
import Select from "react-select";
import API from '../API.js';
import { NavLink } from 'react-router-dom';
import './style.css';

import axios from "axios";
import CDBSidebarFooter from 'react'


export default class Landing extends React.Component {

  /* Frontend output */
  render() {
    return (
      <div>
        <main>
        {/* beginning of back  */}
          <section class="land" >
              {/* card form */}
              <div className="row">
                  <div  className="col-3"style={{}}>
                  <Link to="">  
                    <div class="card" style = {{display:"flex",width:"20rem",height:"20rem",marginLeft:"5rem",marginTop:"5rem"}}>
                        <h2>Classification</h2>
                    </div></Link>
                  </div>
                  <div className="col-9">
                    <Link to="/predict">    
                  <div class="card" style = {{display:"flex",width:"20rem",height:"20rem",marginLeft:"18rem",marginTop:"5rem",marginRight:"5rem"}}>
                        <h2>Clustering </h2>
                  </div></Link>
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

