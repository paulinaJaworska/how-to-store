import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../../static/css/Profile.css';
import PropTypes from "prop-types";
import {updateUser} from "../../actions/auth";

class Profile extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    };

    static propTypes = {
        updateUser: PropTypes.func.isRequired,
    };

    onSubmit = e => {
        e.preventDefault();
        const {username, email, password, password2} = this.state;
        if (password !== password2) {
            this.props.createMessage({passwordNotMatch: 'Passwords do not match'});
        } else {
            let updatedUser;
            // if user didn't enter anything in password fields, so don't send it in the body
            if (password.length === 0 && password2.length === 0) {
                updatedUser = {
                    username,
                    email
                };
            } else {
                updatedUser = {
                    username,
                    email,
                    password
                };
            }
            this.props.updateUser(updatedUser);
        }
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    render() {
        const {username, email} = this.props.user;
        return (
            <div className="container bootstrap snippet">
                <div className="row">
                    <div className="col-sm-8"><h1 className="user-name">{username}</h1></div>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-md-6">
                        {/*left col*/}
                        <div className="text-center">
                            <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                                 className="avatar img-circle img-thumbnail" alt="avatar"/>
                            <h6>Upload a different photo...</h6>
                            <input type="file" className="text-center center-block file-upload"/>
                        </div>
                        <hr/>
                        <br/>

                        <ul className="list-group">
                            <li className="list-group-item"><span
                                className="pull-left"><strong>Profile</strong></span>
                            </li>
                            <li className="list-group-item text-muted"><span
                                className="pull-left"><strong>Activity</strong></span>
                            </li>
                        </ul>

                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="tab-content">
                            <div className="tab-pane active" id="home">
                                <hr/>
                                <form className="form" onSubmit={this.onSubmit} method="put" id="profile-update-form">
                                    <div className="form-group">

                                        <div className="col-xs-6">
                                            <label><h4>Username</h4></label>
                                            <input type="text"
                                                   className="form-control"
                                                   name="username"
                                                   id="username"
                                                   onChange={this.onChange}
                                                   value={this.state.username}
                                                   placeholder={username}/>
                                        </div>
                                    </div>

                                    <div className="form-group">

                                        <div className="col-xs-6">
                                            <label><h4>Email</h4></label>
                                            <input type="email"
                                                   className="form-control"
                                                   name="email"
                                                   id="email"
                                                   onChange={this.onChange}
                                                   value={this.state.email}
                                                   placeholder={email}/>
                                        </div>
                                    </div>

                                    <div className="form-group">

                                        <div className="col-xs-6">
                                            <label><h4>Password</h4></label>
                                            <input type="password"
                                                   className="form-control"
                                                   name="password"
                                                   id="password"
                                                   onChange={this.onChange}
                                                   value={this.state.password}
                                                   placeholder="password"/>
                                        </div>
                                    </div>
                                    <div className="form-group">

                                        <div className="col-xs-6">
                                            <label><h4>Verify</h4></label>
                                            <input type="password"
                                                   className="form-control"
                                                   name="password2"
                                                   id="password2"
                                                   onChange={this.onChange}
                                                   value={this.state.password2}
                                                   placeholder="password2"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-12">
                                            <br/>
                                            <button className="btn btn-lg btn-success"
                                                    type="submit"
                                                    name="submit-form"
                                                    id="submit-form">
                                                <i className="glyphicon glyphicon-ok-sign"/>
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user
});

export default connect(mapStateToProps, {updateUser})(Profile);
