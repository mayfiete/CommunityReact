
import React, { Component } from 'react';
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label
} from 'reactstrap';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import Home from '../pages/Home';
import { BrowserRouter } from 'react-router-dom';
import {
    Route,
    Switch,
    NavLink,
    Router
} from "react-router-dom";



class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false, // modal is closed by default
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Username:  ${this.username.value}   Password: ${this.password.value} 
                Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }


    render() {
        return (
            <>
                <BrowserRouter>
                    <Navbar dark expand="md"

                    >
                        <div className="container"
                        >
                            <div
                                className="row navbar navbar-expand-lg navbar-light bg-light"
                                expand="lg"
                                sticky="top"
                                style={{
                                    sticky: "top",
                                    width: "100vw",
                                    position: "fixed",
                                    justifyContent: "spaced-evenly",
                                    top: 75,
                                    left: 0,
                                    backgroundColor: 'khaki',
                                }}
                            >
                                <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/whitelogo.png" height="50" width="150" alt="Logo" /></NavbarBrand>
                                <NavbarToggler onClick={this.toggleNav} />
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav navbar
                                        display="flex"
                                        flex-direction="row"
                                        justifyContent="space-evenly"
                                        overflow="hidden"
                                        expand="lg"
                                    >
                                        <NavItem>
                                            <NavLink className="nav-link" to="/home">
                                                <i className="fa fa-home fa-lg" /> Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/directory">
                                                <i className="fa fa-list fa-lg" /> Directory
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/aboutus">
                                                <i className="fa fa-info fa-lg" /> About
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/contactus">
                                                <i className="fa fa-address-card fa-lg" /> Contact Us
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/wiki">
                                                <i className="fa fa-address-card fa-lg" /> Wiki
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <span className="navbar-text ml-auto">
                                        <Button outline onClick={this.toggleModal}>
                                            <i className="fa fa-sign-in-alt fa-lg" /> Login
                                        </Button>
                                    </span>
                                </Collapse>
                            </div>
                        </div>
                    </Navbar>
                </BrowserRouter>
            </>
        );
    }
}



const linkStyle = {
    margin: "5 10px",
    textDecoration: "none",
    color: 'blue'
};

export default NavigationBar;