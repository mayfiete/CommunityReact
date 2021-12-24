import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Connect, Switch, Routes, Route, Redirect, withRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Footer from '../components/FooterComponent';
import Navbar from '../components/NavbarComponent';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';



class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (

            <div>
                <Header />
                <Navbar />
                <BrowserRouter>
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/contact' component={Contact} />
                        <Redirect to='/home' />
                    </Switch>
                </BrowserRouter>
                <Footer />
            </div >

        );
    }
}

export default Main;