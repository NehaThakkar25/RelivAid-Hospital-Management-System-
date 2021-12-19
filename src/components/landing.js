import React from 'react';
import { Jumbotron } from 'reactstrap';

const Landing = () => (
    <Jumbotron 
        className="col-xs-12 offset-sm-2 col-sm-8 offset-md-3 col-md-6 offset-lg-3 col-lg-6 jumbotron">
        <h5 className="text-center display-3">Welcome to RelivAid Hospital</h5><br />
        <p className="lead">
            This is a software aimed at managing our hospital's and clinic's 
            and other related data in a timely, effective and efficient manner.
        </p><br />
        <hr className="my-2" />
        <p className="instructions">To get started, select a module on the navigation bar.</p>
    </Jumbotron>
)

export default Landing;