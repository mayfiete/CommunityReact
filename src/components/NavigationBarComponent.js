
import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import { div } from 'react-router-dom';

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <ul id="nav">
                    <div>
                        <div className="nav-link" to="/home"
                            border="1px solid white"
                        >
                            <i className="fa fa-home fa-lg" /> Home
                        </div>
                    </div>
                    <div>
                        <div className="nav-link" to="/directory">
                            <i className="fa fa-list fa-lg" /> Directory
                        </div>
                    </div>
                    <div>
                        <div className="nav-link" to="/aboutus">
                            <i className="fa fa-info fa-lg" /> About
                        </div>
                    </div>
                    <div>
                        <div className="nav-link" to="/contactus">
                            <i className="fa fa-address-card fa-lg" /> Contact Us
                        </div>
                    </div>
                    <div className="nav-link" to="/wiki">
                        <i className="fa fa-address-card fa-lg" /> Wiki
                    </div>
                </ul>
            </div>
        );
    }
}

export default NavigationBar;