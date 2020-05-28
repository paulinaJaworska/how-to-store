import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../../static/css/comments.css'

export default class MyComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-header">
                            <div className="col col-lg-12 col-xs-12 col-md-12 comments-bar">
                                <h5>Comments</h5>
                            </div>
                        </div>
                        <div className="comments-list">

                            <div className="media">
                                <a className="media-left" href="#">
                                    <img src="http://lorempixel.com/40/40/people/1/"/>
                                </a>

                                <div className="media-body">

                                    <h4 className="media-heading user_name">Baltej Singh <p className="date pull-right">
                                        <small>5 days ago</small></p></h4>

                                    Wow! this is really great.
                                    <p><small><a href="">Like</a></small></p>
                                </div>
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
