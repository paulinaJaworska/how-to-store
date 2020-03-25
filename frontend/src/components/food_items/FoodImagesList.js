import React from 'react';

const FoodImagesList = props => {
    console.log(props.food_items);
    const images = props.food_items.map((item) => {
        return <img src={item.image}/>
    });

    return <div>{images}</div>
};


export default FoodImagesList;