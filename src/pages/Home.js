
import React from 'react';
import Header from '../components/HeaderComponent';
import Hero from '../components/HeroComponent';
import NavigationBar from '../components/NavigationBarComponent';
import { Link } from 'react-router-dom'


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


function Home(props) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md m-1 d-flex">
                        <RenderHero />
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default Home; 