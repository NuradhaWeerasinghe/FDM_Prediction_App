import React, { Component } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Link } from 'react-router-dom';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './sidebars.css'

export default class sidebars extends Component {
    render() {
        return (
            <div>
                <SideNav className="sidenav"
                    onSelect={(selected) => {
                        // Add your code here
                    }}
                >
                    <SideNav.Toggle className="marg" />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem className="item " eventKey="Home" style={{marginTop:"20px"}}>
                            <NavIcon><Link to="/">
                            <i class="fa fa-home fa-2x" aria-hidden="true"></i>
                            </Link>
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>

                        <NavItem className="item" eventKey="Prediction">
                            <NavIcon><Link to="/predict">
                            <i class="fa fa-bar-chart fa-2x" aria-hidden="true"></i>

                            </Link>
                            </NavIcon>
                            <NavText>
                             Prediction
                            </NavText>
                        </NavItem>
                        <NavItem className="item" eventKey="Overview">
                            <NavIcon><Link to="/chart">
                            <i class="fa fa-table fa-2x" aria-hidden="true"></i>

                            </Link>
                            </NavIcon>
                            <NavText>
                                Overview
                            </NavText>
                        </NavItem>
                        <NavItem className="item" eventKey="CustomerData">
                            <NavIcon><Link to="/data">
                            <i class="fa fa-users fa-2x" aria-hidden="true"></i>

                            </Link>
                            </NavIcon>
                            <NavText>
                            Customer Data
                            </NavText>
                        </NavItem>
                        <NavItem className="item" eventKey="Contact" style={{marginTop:"200px", height:"30px", width:"20px"}}>
                            <NavIcon><Link to="/data">
                            <i class="fa fa-phone fa-2x" aria-hidden="true"></i>


                            </Link>
                            </NavIcon>
                            <NavText>
                            Contact
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>

            </div>
        )
    }
}
