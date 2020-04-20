import React, {Component} from 'react';
import {connect} from "react-redux";
import '../../../static/css/FoodDetails.css'

import {getFoodItem} from "../../actions/foodItems";


class FoodDetails extends Component {

    componentDidMount() {
        // get id from url parameter
        this.props.getFoodItem(this.props.match.params.id);
        console.log(this.props.foodItem);
    }

    render() {
        const {title, image, storage, description, ripeness} = this.props.foodItem;
        return (
            <div className="container-fluid w-100">
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
                    <div className="col col-lg-12 col-xs-12 col-md-12 comments-bar"><h5>Comments</h5></div>
                </div>
                {/*<div className="box stack-top row">{title}</div>*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    foodItem: state.foodItems.foodItem
});

export default connect(mapStateToProps, {getFoodItem})(FoodDetails);
