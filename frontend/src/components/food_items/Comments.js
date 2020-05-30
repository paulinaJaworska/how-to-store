import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../../static/css/comments.css'
import {addComment} from "../../actions/comments";
import PropTypes from "prop-types";
import {getFoodItem} from "../../actions/foodItems";


class Comments extends Component {
    state = {
        post_id: this.props.postId,
        comment: '',

    };

    static propTypes = {
        addComment: PropTypes.func.isRequired,
        getFoodItem: PropTypes.func.isRequired,
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        if (this.state.comment.length > 0) {
            this.props.addComment(this.state.post_id, this.state.comment);
            this.props.getFoodItem(this.state.post_id);
        }
    };

    render() {
        const {comments} = this.props.foodItem;
        let postComments;
        if (comments !== undefined) {
            postComments = comments.map((comment) => {
                return (
                    <div className="media" key={comment.id}>
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
            <div className="container w-100 comments-section">
                <div className="row w-100">
                    <div className="col-md-12">
                        <div className="page-header">
                            <div className="col col-lg-12 col-xs-12 col-md-12 comments-bar">
                                <h5>Comments</h5>
                            </div>
                        </div>
                        <div className="comments-list">
                            {postComments}
                        </div>
                        <div className="comments-list pt-5">
                            <form onSubmit={this.onSubmit}>
                                <div>
                                    <label>Write your comment:</label>
                                    <input type="text"
                                           className="form-control"
                                           name="comment"
                                           onChange={this.onChange}
                                           value={this.state.comment}
                                    />
                                </div>
                                <div className="m-3">
                                    <button type="submit" className="btn brown-btn">
                                        Add comment
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    foodItem: state.foodItems.foodItem
});

export default connect(mapStateToProps, {addComment, getFoodItem})(Comments);
