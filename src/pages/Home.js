
import React from 'react';
import Hero from '../components/HeroComponent';

import NavigationBar from '../components/NavigationBarComponent';
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';


function RenderHero() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Hero />
                </div>
            </div>
        </div>
    );
}

function RenderProcessOverview() {
    return (
        <div className="container"
            style={{
                position: 'fixed',
                left: '0',
                top: '150px',
                width: '100%'
            }}>
            <div className="row">
                <div className="col">
                    <Card>
                        <CardImg class="" src="/assets/images/dancing-montage.jpg" alt="Card image cap"
                            style={{
                                position: 'fixed',
                                left: '0',
                                width: '33vw',
                                overflow: 'hidden',
                                border: '15px solid white'
                            }}
                        />
                        <CardBody
                            style={{
                                position: 'fixed',
                                left: '0',
                                width: '33vw',
                                overflow: 'hidden'
                            }}
                        >
                            <CardImgOverlay>
                                < CardTitle>
                                    See our inspiration
                                </CardTitle>
                            </CardImgOverlay>

                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function RenderInspiration() {
    return (
        <div className="container-fluid"
        >
            <div className="row">
                <div className="col-4">
                    <Card>
                        <CardImg src="/assets/images/dancing-montage.jpg" alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle>See our inspiration</CardTitle>

                            <CardText>
                                As you grow older, you will discover that you have two hands — one for helping yourself, the other for helping others.
                                <hr></hr>
                                - Audrey Hepburn
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}


function Home(props) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md m-1 d-flex">
                        <RenderHero />
                    </div>
                </div>
            </div>
            <div className="col-md d-flex" style={{ backgroundColor: "#d3d3d3" }}>
                <div className="col-md m-1 d-flex">
                    <RenderProcessOverview />
                </div>
            </div>
        </ >
    );
}

export default Home; 