import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Connect, Routes, Route, withRouter, Switch, Redirect } from 'react-router-dom';
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
                <Header
                    marginBottom="15px"
                    paddingBottom="15px"
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