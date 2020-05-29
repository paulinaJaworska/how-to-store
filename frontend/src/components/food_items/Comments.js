import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../../static/css/comments.css'
import {getComments} from "../../actions/comments";


class Comments extends Component {
    componentDidMount() {
        this.props.getComments(this.props.currentlyDisplayedItem);

    }

    render() {
        const {comments} = this.props.foodItem;
        let postComments;
        if (comments !== undefined) {
            console.log(comments);
            postComments = comments.map((comment) => {
                // date_posted = comment.date_posted.format(date);
                return (
                    <div className="media">
                        {/*<a className="media-left" href="#">*/}
                        {/*    <img src="http://lorempixel.com/40/40/people/1/"/>*/}
                        {/*</a>*/}

                        <div className="media-body">

                            <h4 className="media-heading user_name">{comment.author.username} <p
                                className="date pull-right">
                                <small>{new Intl.DateTimeFormat("en-GB", {
                                    year: "numeric",
                                    month: "long",
                                    day: "2-digit"
                                }).format(comment.date_published)}</small></p></h4>

                            {comment.content}
                            {/*todo*/}
                            {/*<p><small><a href="">Like</a></small></p>*/}
                        </div>
                    </div>
                )
            })
        }


        // const {author, content, date_posted, reply_to}
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
                            {postComments}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    comments: state.comments.comments,
    foodItem: state.foodItems.foodItem
});

export default connect(mapStateToProps, {getComments})(Comments);
