import axios from 'axios';

import {GET_FOOD_ITEM, GET_FOOD_ITEMS, GET_SEARCH_RESULT, GET_CLICKED_ITEM_ID} from "./types";
import {returnErrors} from "./messages";

// GET FOOD ITEMS
export const getFoodItems = () => dispatch => {
    axios.get('api/posts/')
        .then(res => {
            dispatch({
                type: GET_FOOD_ITEMS,
                payload: res.data
            });
        })
        .catch(err => dispatch(
            returnErrors(err.response.data, err.response.status)
        ));
};

// GET RESULT OF SEARCH
export const getSearchResult = (term) => dispatch => {
    axios.get(`api/posts/?search=${term}/`)
        .then(res => {
            dispatch({
                type: GET_SEARCH_RESULT,
                payload: res.data
            });
        })
        .catch(err => dispatch(
            returnErrors(err.response.data, err.response.status)
        ));
};

//GET DETAILS OF A FOOD ITEM
export const getFoodItem = (id) => dispatch => {
    axios.get(`api/posts/${id}/`)
        .then(res => {
            dispatch({
                type: GET_FOOD_ITEM,
                payload: res.data
            })
        })
        .catch(err => dispatch(
            returnErrors(err.response.data, err.response.status)
        ));
};

export const getClickedItemId = (id) => dispatch => {
    dispatch({
        type: GET_CLICKED_ITEM_ID,
        payload: id
    })
};