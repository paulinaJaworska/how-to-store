import axios from 'axios';

import {GET_FOOD_ITEMS} from "./types";

// GET FOOD ITEMS
export const getFoodItems = () => dispatch => {
    axios.get('/api/posts/')
        .then(res => {
            dispatch({
                type: GET_FOOD_ITEMS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};