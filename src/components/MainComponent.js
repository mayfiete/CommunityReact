import React, { Component } from 'react';
import { Connect, Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';


class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path="/contact" component={Contact} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Main);