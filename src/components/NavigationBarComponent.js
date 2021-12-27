
import React, { Component } from 'react';
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';


class NavigationBar extends Component {
    render() {
        return (
            <>
                <div className="container-fluid"
                    position="absolute"
                >
                    <div className="row">
                        <ul id="nav">
                            <img
                                src="/assets/images/Community Kanban-logos_black.png"
                                width="250"
                                height="250"
                                paddingBottom="20px"
                                left="-1"
                                alt="React Bootstrap logo"
                                href="/"
                            />
                            <div>
                                <div to="/directory">
                                    <i className="fa fa-list fa-lg" /> Directory
                                </div>
                            </div>
                            <div>
                                <div to="/aboutus">
                                    <i className="fa fa-info fa-lg" /> About
                                </div>
                            </div>
                            <div>
                                <div to="/contactus">
                                    <i className="fa fa-address-card fa-lg" /> Contact Us
                                </div>
                            </div>
                            <div to="/wiki">
                                <i className="fa fa-address-card fa-lg" /> Wiki
                            </div>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default NavigationBar;