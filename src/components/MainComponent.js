import React, { Component } from 'react';
import Contact from '../pages/Contact';
import { Connect, Switch, Route, Redirect, withRouter } from 'react-router-dom';


class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/contact" component={Contact} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Main);