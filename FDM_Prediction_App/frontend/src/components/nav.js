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
                        <NavItem className="item" eventKey="Home">
                            <NavIcon><Link to="/">
                                <i class="fas fa-chart-line" width="30px" height="30px"></i>
                            </Link>
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>

                        <NavItem className="item" eventKey="Predict">
                            <NavIcon><Link to="/predict">
                                <img src="https://i.ibb.co/fx7wFSS/icon-8.png" alt="icon-8" width="30px" height="30px" />
                            </Link>
                            </NavIcon>
                            <NavText>
                                Predict
                            </NavText>
                        </NavItem>
                        <NavItem className="item" eventKey="Overview">
                            <NavIcon><Link to="/chart">
                                <img src="https://i.ibb.co/fx7wFSS/icon-8.png" alt="icon-8" width="30px" height="30px" />
                            </Link>
                            </NavIcon>
                            <NavText>
                                Overview
                            </NavText>
                        </NavItem>
                        <NavItem className="item" eventKey="Segment">
                            <NavIcon><Link to="/data">
                                <img src="https://i.ibb.co/fx7wFSS/icon-8.png" alt="icon-8" width="30px" height="30px" />
                            </Link>
                            </NavIcon>
                            <NavText>
                                kk;
                            </NavText>
                        </NavItem>
                        <NavItem className="item" eventKey="ssl">
                            <NavIcon>
                                <img src="https://i.ibb.co/fx7wFSS/icon-8.png" alt="icon-8" width="30px" height="30px" />
                            </NavIcon>
                            <NavText>
                                kk;
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>

            </div>
        )
    }
}
