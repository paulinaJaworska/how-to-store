import axios from 'axios';

import {GET_FOOD_ITEMS, GET_SEARCH_RESULT} from "./types";

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

// GET RESULT OF SEARCH
export const getSearchResult = (term) => dispatch => {
    axios.get(`/api/posts/?search=${term}`)
        .then(res => {
            dispatch({
                type: GET_SEARCH_RESULT,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};
