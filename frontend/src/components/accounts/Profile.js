import React, {Component} from 'react';
import {connect} from 'react-redux';

export default class Profile extends Component {
    render() {
        return (
                <div className="container bootstrap snippet">
                    <div className="row">
                        <div className="col-sm-10"><h1>User name</h1></div>
                        <div className="col-sm-2"><a href="/users" className="pull-right">
                            <img title="profile image"
                                 className="img-circle img-responsive"
                                 src="http://www.gravatar.com/avatar/28fd20ccec6865e2d5f0e1f4446eb7bf?s=100"/></a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3">
                            {/*left col*/}
                            <div className="text-center">
                                <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                                     className="avatar img-circle img-thumbnail" alt="avatar"/>
                                <h6>Upload a different photo...</h6>
                                <input type="file" className="text-center center-block file-upload"/>
                            </div>
                            <hr/>
                            <br/>

                            {/*<ul className="list-group">*/}
                            {/*    <li className="list-group-item text-muted">Activity <i*/}
                            {/*        className="fa fa-dashboard fa-1x"></i></li>*/}
                            {/*    <li className="list-group-item text-right"><span*/}
                            {/*        className="pull-left"><strong>Shares</strong></span> 125*/}
                            {/*    </li>*/}
                            {/*    <li className="list-group-item text-right"><span*/}
                            {/*        className="pull-left"><strong>Likes</strong></span> 13*/}
                            {/*    </li>*/}
                            {/*    <li className="list-group-item text-right"><span*/}
                            {/*        className="pull-left"><strong>Posts</strong></span> 37*/}
                            {/*    </li>*/}
                            {/*    <li className="list-group-item text-right"><span*/}
                            {/*        className="pull-left"><strong>Followers</strong></span> 78*/}
                            {/*    </li>*/}
                            {/*</ul>*/}

                        </div>
                        {/*col-3*/}
                        <div className="col-sm-9">
                            <div className="tab-content">
                                <div className="tab-pane active" id="home">
                                    <hr/>
                                    <form className="form" action="##" method="post" id="registrationForm">
                                        <div className="form-group">

                                            <div className="col-xs-6">
                                                <label for="first_name"><h4>Username</h4></label>
                                                <input type="text" className="form-control" name="first_name"
                                                       id="first_name"
                                                       placeholder="first name" title="enter your first name if any."/>
                                            </div>
                                        </div>

                                        <div className="form-group">

                                            <div className="col-xs-6">
                                                <label for="email"><h4>Email</h4></label>
                                                <input type="email" className="form-control" name="email" id="email"
                                                       placeholder="you@email.com" title="enter your email."/>
                                            </div>
                                        </div>

                                        <div className="form-group">

                                            <div className="col-xs-6">
                                                <label for="password"><h4>Password</h4></label>
                                                <input type="password" className="form-control" name="password"
                                                       id="password"
                                                       placeholder="password" title="enter your password."/>
                                            </div>
                                        </div>
                                        <div className="form-group">

                                            <div className="col-xs-6">
                                                <label for="password2"><h4>Verify</h4></label>
                                                <input type="password" className="form-control" name="password2"
                                                       id="password2"
                                                       placeholder="password2" title="enter your password2."/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <br/>
                                                <button className="btn btn-lg btn-success" type="submit">
                                                    <i className="glyphicon glyphicon-ok-sign"/>
                                                    Save
                                                </button>
                                                <button className="btn btn-lg" type="reset">
                                                    <i className="glyphicon glyphicon-repeat"/>
                                                    Reset
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

// function mapStateToProps(state) {
//     return {};
// }
//
// export default connect(
//     mapStateToProps,
// )(MyComponent);
