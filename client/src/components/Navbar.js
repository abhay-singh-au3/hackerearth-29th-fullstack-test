import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Fragment>
            <div className="container-fluid bg-dark d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <Link className="navbar-brand" to="/" style={{color: "white"}}>Tedd App</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Navbar;