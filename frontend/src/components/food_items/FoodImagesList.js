import '../../../static/css/FoodImagesList.css'
import React from 'react';
import ImageCard from "./ImageCard";

const FoodImagesList = props => {
    const images = props.food_items.map((item) => {
        return <ImageCard key={item.id} item={item}/>
    });

    return <div className="image-list">{images}</div>
};


export default FoodImagesList;