import React, {Component} from 'react';
import {connect} from "react-redux";
import '../../../static/css/FoodDetails.css'

import {getFoodItem, getClickedItemId} from "../../actions/foodItems";
import Comments from "./Comments";


class FoodDetails extends Component {

    componentDidMount() {
        // get id from url parameter
        this.props.getFoodItem(this.props.match.params.id);
        this.props.getClickedItemId(this.props.match.params.id);
    }

    render() {
        const {title, image, storage, description, ripeness} = this.props.foodItem;
        return (
            <>
            <div className="container-fluid w-100 full-page">
                <div className="row center-block">
                    <div className="col col-lg-6 col-xs-12 col-md-12 square image-container">
                        <img ref={this.imageRef} alt={title} src={image}/>
                    </div>
                    <div className="col col-lg-6 col-xs-12 col-md-12 square text-content">
                        <h1>{title}</h1><br/>
                        <h2>Storage</h2>
                        <p>{storage}</p>
                        <h2>Description</h2>
                        <p>{description}</p>
                        <h2>Ripeness</h2>
                        <p>{ripeness}</p>
                    </div>
                </div>
                {/*<div className="box stack-top row">{title}</div>*/}
            </div>
            <Comments />
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    foodItem: state.foodItems.foodItem,
    currentlyDisplayedItem: state.foodItems.currentlyDisplayedItem
});

export default connect(mapStateToProps, {getFoodItem, getClickedItemId})(FoodDetails);
