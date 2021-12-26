
import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <ul id="nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Technologists</a></li>
                    <li><a href="#">Nonprofits</a></li>
                    <li><a href="#">Wiki</a></li>
                </ul>
            </div>
        );
    }
}

export default NavigationBar;