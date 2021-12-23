
import React from 'react';
import Header from '../components/HeaderComponent';
import { Link } from 'react-router-dom'

function RenderHeader() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Header />
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
                        <RenderHeader />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home; 