import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Connect, Switch, Routes, Route, Redirect, withRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Footer from '../components/FooterComponent';
import NavigationBar from '../components/NavigationBarComponent';




class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <>
                <Header />
                <NavigationBar
                    top="0"
                    bottom="0"
                />
                <BrowserRouter>
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/contact' component={Contact} />
                        <Redirect to='/home' />
                    </Switch>
                </BrowserRouter>
                <Footer />
            </ >

        );
    }
}

export default Main;