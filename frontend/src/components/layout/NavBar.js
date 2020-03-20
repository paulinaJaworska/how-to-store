import React, {Component} from 'react';

import '../../../static/css/Navbar.css';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="container-fluid">
                    <div className="row w-100">
                    <ul className="navbar-nav mr-auto col-2">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">About<span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-auto col-8 d-flex justify-content-center">
                        <li className="nav-item active">
                            <h3 className="nav-link">How to store<span className="sr-only">(current)</span></h3>
                        </li>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
                    </form>

                        </ul>
                    <ul className="navbar-nav mr-auto col-2 d-flex justify-content-end">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Login<span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    </div>
                    </div>
                </div>
            </nav>
        )
    }
}