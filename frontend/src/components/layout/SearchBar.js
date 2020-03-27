import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

class SearchBar extends Component {
    state = {term: ''};

    onFormSubmit = event => {
    //    prevents default page refreshing after hitting enter
        event.preventDefault();

        // take all the post data from the store
        // filter records base on titles and search term
        // dispatch the result to the store to let it be displayed
    };

    render() {
        return (
            <>
                <form className="form-inline my-2 my-lg-0" onSubmit={this.onFormSubmit} >
                        <input className="form-control mr-sm-2"
                               type="text"
                               onChange={(e) => this.setState({ term: e.target.value })}
                               value={this.state.term}
                               placeholder="Search"
                               aria-label="Search"/>
                        {/*<button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>*/}
                </form>
            </>
        );
    }
}

export default connect(
    mapStateToProps,
)(SearchBar);
