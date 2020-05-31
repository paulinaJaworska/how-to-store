import React, {Component} from "react";
import AutocompleteSearchBar from "./AutocompleteSearchBar";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import '../../../static/css/Navbar.css';
import {connect} from "react-redux";
import {logout} from "../../actions/auth";

class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <ul className="navbar-nav mr-auto col-2 d-flex justify-content-end">
                <li className="nav-item active my-2">
                    <Link to="/profile" id="user-name" className="nav-link">
                        {user ? `${user.username}` : ''}
                        <span className="sr-only">(current)</span>
                    </Link>
                </li>
                <li className="nav-item active my-2">
                    <button onClick={this.props.logout} type="button" className="nav-link btn btn-link">
                        <a>Logout</a><span className="sr-only">(current)</span>
                    </button>
                </li>
            </ul>
        );
        const guestLinks = (
                <ul className="navbar-nav mr-auto col-2 d-flex justify-content-end">
                    <li className="nav-item active my-2">
                        <Link to="/register" className="nav-link">
                            Register<span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item active my-2">
                        <Link to="/login" className="nav-link">
                            Login<span className="sr-only">(current)</span>
                        </Link>
                    </li>
                </ul>
            )
        ;
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="container-fluid">
                            <div className="row w-100">
                                <ul className="navbar-nav mr-auto col-2">
                                    <li className="nav-item active my-2">
                                        <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item active my-2">
                                        <a className="nav-link" href="#">About<span className="sr-only">(current)</span></a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav mr-auto col-8 d-flex justify-content-center">
                                    <li className="nav-item active">
                                        <h3 className="nav-link">How to store<span className="sr-only">(current)</span>
                                        </h3>
                                    </li>
                                    <AutocompleteSearchBar/>
                                </ul>
                                {isAuthenticated ? authLinks : guestLinks}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logout})(Header)