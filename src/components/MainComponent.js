import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Connect, Switch, Routes, Route, Redirect, withRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <BrowserRouter>
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route exact path='/contact' component={Contact} />
                        <Redirect to="/" />
                    </Switch>
                </BrowserRouter>
            </div >
        );
    }
}

export default Main;