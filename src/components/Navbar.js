
//Navbar.js
import React from 'react';
import { NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';

const Navbar = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col">
                        <div className="navbar navbar-expand-lg navbar-light bg-light"
                            style={{
                                sticky: "top",
                                width: "100%",
                                position: "fixed",
                                top: 0,
                                backgroundColor: 'darkblue'
                            }}>

                            <text style={{
                                fontSize: "xx-large",
                                align: "center",
                                color: 'white',
                                paddingRight: "10px",
                                fontWeight: 'bold',
                                marginRight: '10px',
                                font: 'Arial',
                                paddingTop: '10px',
                                paddingBottom: '10px'
                            }}>
                                You can't spell COMMUNITY without I.T.
                            </text>

                        </div >
                    </div>
                </div>
            </div>
        </>
    )
};

export default Navbar;