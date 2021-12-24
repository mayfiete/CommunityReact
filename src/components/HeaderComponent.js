
//Navbar.js
import { render } from '@testing-library/react';
import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';

const Header = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="header"
                        style={{
                            flex: 1,
                            marginTop: '10px',
                            marginBottom: '10px',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                        }}
                    >
                        <div className='row'
                            style={{
                                position: 'absolute',
                                left: '0',
                                width: '100%',
                                overflow: 'hidden'
                            }}>
                            <div className="col">
                                <div className="navbar navbar-expand-lg navbar-light bg-light"
                                    expand="lg"
                                    dark sticky="top"
                                    style={{
                                        sticky: "top",
                                        width: "100%",
                                        position: "fixed",
                                        top: 0,
                                        backgroundColor: 'MidnightBlue',
                                    }}>
                                    <text style={{
                                        fontSize: "xx-large",
                                        align: "center",
                                        color: 'yellow',
                                        fontWeight: 'bold',
                                        font: 'Kalam',
                                        fontFamily: 'cursive',
                                        fontStyle: 'italic',
                                        paddingTop: '10px',
                                        paddingBottom: '30px',
                                        marginBottom: '20px'
                                    }}>
                                        COMMUNITY KANBAN
                                    </text>
                                    <br>

                                    </br>
                                    <text style={{
                                        fontSize: "x-large",
                                        align: "center",
                                        color: 'white',
                                        font: 'Arial',
                                        paddingTop: '10px',
                                        paddingBottom: '10px',
                                        marginTop: '50px',
                                    }}>
                                        You can't spell Communi
                                    </text>
                                    <text style={{
                                        fontSize: "x-large",
                                        align: "center",
                                        color: 'yellow',
                                        font: 'cougard',
                                        fontStyle: 'italic',
                                        fontFamily: 'cursive',
                                        paddingTop: '10px',
                                        paddingBottom: '10px',
                                        marginTop: '50px',
                                    }}>
                                        IT
                                    </text>
                                    <text style={{
                                        fontSize: "x-large",
                                        align: "center",
                                        color: 'white',
                                        font: 'Arial',
                                        paddingTop: '10px',
                                        paddingBottom: '10px',
                                        marginTop: '50px',
                                    }}>
                                        y without I.T.
                                    </text>

                                </div >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Header;