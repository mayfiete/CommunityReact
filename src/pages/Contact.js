import React, { Component } from 'react';
import {
    Breadcrumb, BreadcrumbItem,
    Button, Label, Col, Row
} from 'reactstrap';
import { Link } from 'react-router-dom';
// import { Control, LocalForm, Errors } from 'react-redux-form';


class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <address href="mailto: 123 Main Street Richmond, Va">
                            </address>
                        </address>
                    </div>
                </div>
            </div>
        );
    };
}

export default Contact;
