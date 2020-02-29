import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default () =>
    <Fragment>
        <div className="container d-flex justify-content-center not-found">
            <h2 className="h4 text-center">Oops!</h2>
            <h2 className="h4 text-center">404 Not Found</h2>
            <p className="text-center">Sorry, an error has occured, Requested page not found!</p>
            <Link to="/" className="text-center">Go to home</Link>
        </div>
    </Fragment>