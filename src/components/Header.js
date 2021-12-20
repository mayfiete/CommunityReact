import react from 'react';
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { useEffect, useState, isSticky } from 'react';

// Sticky Header that 


const Header = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className=".header"
                            style={{
                                backgroundColor: '#f4f4f4',
                                fontSize: '20px',
                                fontFamily: 'sans-serif',
                                padding: '10px',
                                textAlign: 'center',
                                borderRadius: '5px'
                            }}
                        >
                            <h1> Community Kanban </h1>
                            <h2> You can't spell COMMMUNITY without I.T. </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header; 
