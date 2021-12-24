
import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Accordion } from 'reactstrap';
import { Collapse, Button } from 'react-bootstrap'

class NavigationBar extends Component {

    render() {

        return (
            <Navbar dark sticky="top" expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="/assets/images/Community Kanban-logos_black.png" height="50%" width="50%" alt="Logo" />
                    </NavbarBrand>

                    <Collapse navbar>

                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <i className="fa fa-home fa-lg" /> Home
                            </NavLink>
                        </NavItem>

                    </Collapse>
                </div>
            </Navbar>


        )
    }
}

export default NavigationBar;