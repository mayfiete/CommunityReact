import react from 'react';
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, CardImgOverlay
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink } from 'reactstrap';

import { useEffect, useState, isSticky } from 'react';

// Sticky Header that 


const Hero = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Card>
                            <CardImgOverlay
                                style={{
                                    sticky: "top",
                                    width: "100%",
                                    position: "fixed",
                                    top: 0,
                                    backgroundColor: 'darkblue'
                                }}>
                                You can't spell COMMUNITY without I.T.
                            </CardImgOverlay>
                            <CardImg className="col"
                                src="/assets/images/CKHero.png"
                                width="100%"
                                alt="Card image cap"
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero; 
