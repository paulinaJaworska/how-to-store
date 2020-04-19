import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {getFoodItem, getFoodItems} from "../../actions/foodItems";


class FoodDetails extends Component {
    static propTypes = {
        allFoodItems: PropTypes.array.isRequired,
    };

    componentDidMount() {
        this.props.getFoodItem(this.props.title);
        this.props.getFoodItems();
    }

    render() {
        return (
            <div className="container detail-page">
                <div className="row">
                    <div className="col square one">Column</div>
                    <div className="col square two">Column</div>
                    <div className="w-100"></div>
                    <div className="col three">Column</div>
                </div>
                <div className="box stack-top"></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    foodItem: state.foodItems.foodItem
});

export default connect(mapStateToProps, {getFoodItem, getFoodItems})(FoodDetails);
