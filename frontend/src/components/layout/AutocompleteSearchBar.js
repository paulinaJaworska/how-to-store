import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getSearchResult, getFoodItems} from "../../actions/foodItems";

function mapStateToProps(state) {
    return {
        foodItems: state.foodItems.foodItems,
        allFoodItems: state.foodItems.allFoodItems
    };
}

class AutocompleteSearchBar extends Component {
    static propTypes = {
        foodItems: PropTypes.instanceOf(Array),
        allFoodItems: PropTypes.instanceOf(Array)
    };

    constructor(props) {
        super(props);

        this.state = {
            // The active selection's index
            activeSuggestion: 0,
            // The suggestions that match the user's input
            filteredSuggestions: [],
            // Whether or not the suggestion list is shown
            showSuggestions: false,
            // What the user has entered
            userInput: "",
            userInputLength: 0
        };
    }

    onFormSubmit = event => {
        //    prevents default page refreshing after hitting enter
        event.preventDefault();
        // get all the search results based on user input
        // dispatch the result to the store to let it be displayed
        if (this.state.userInputLength === 0) {
            // user deleted whole input and has hit enter
            this.setState({userInput: ''});
            this.props.getFoodItems();
        } else {
            this.props.getSearchResult(this.state.userInput);
        }

    };

    // Event fired when the input value is changed
    onChange = e => {
        const suggestions = this.props.allFoodItems.map(item => item.title);
        const userInput = e.currentTarget.value;

        // Filter our suggestions that don't contain the user's input
        const filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        // Update the user input and filtered suggestions, reset the active
        // suggestion and make sure the suggestions are shown
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value,
            userInputLength: userInput.length
        });

    };

    // Event fired when the user clicks on a suggestion
    onClick = e => {
        // Update the user input and reset the rest of the state
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });
        // result of clicking on one of the suggestions on suggestion's list
        this.props.getSearchResult(e.target.innerText);

    };

    // Event fired when the user presses a key down
    onKeyDown = e => {
        const {activeSuggestion, filteredSuggestions} = this.state;

        // Move scrollbar along with an active suggestion
        const container = document.getElementById('suggestions');
        const rowToScrollTo = document.getElementById('suggestion-active');
        container.scrollTop = rowToScrollTo.offsetTop;

        // User pressed the enter key, update the input and close the suggestions
        if (e.keyCode === 13) {
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
            });
        }
        // User pressed the up arrow, decrement the index
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }

            this.setState({activeSuggestion: activeSuggestion - 1});
        }
        // User pressed the down arrow, increment the index
        else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }

            this.setState({activeSuggestion: activeSuggestion + 1});
        }
    };

    render() {
        const {
            onFormSubmit,
            onChange,
            onClick,
            onKeyDown,
            state: {
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        } = this;

        let suggestionsListComponent;

        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul id="suggestions" className="suggestions">
                        {filteredSuggestions.map((suggestion, index) => {
                            let id;
                            let className;

                            // Flag the active suggestion with a class
                            if (index === activeSuggestion) {
                                id = "suggestion-active";
                                className = "suggestion-active";
                            }

                            return (
                                <li
                                    id={id}
                                    className={className}
                                    key={suggestion}
                                    onClick={onClick}
                                >
                                    {suggestion}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                suggestionsListComponent = (
                    <div className="no-suggestions">
                        <em>No suggestions!</em>
                    </div>
                );
            }
        }

        return (
            <Fragment>
                <form className="search-form form-inline my-2 my-lg-0" onSubmit={onFormSubmit}>
                    <input
                        className="form-control mr-sm-2"
                        type="text"
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        value={userInput}
                    />
                    {suggestionsListComponent}
                </form>
            </Fragment>
        );
    }
}

export default connect(mapStateToProps, {getSearchResult, getFoodItems})(AutocompleteSearchBar);