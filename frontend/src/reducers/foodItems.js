import {GET_FOOD_ITEMS, GET_SEARCH_RESULT} from '../actions/types.js'
import {GET_FOOD_ITEM} from "../actions/types";

const initialState = {
    foodItems: [],
    allFoodItems: [],
    foodItem: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FOOD_ITEMS:
            return {
                ...state,
                foodItems: action.payload,
                allFoodItems: action.payload
            };
        case GET_SEARCH_RESULT:
            return {
                ...state,
                foodItems: action.payload,
                foodItem: null
            };
        case GET_FOOD_ITEM:
            return {
                ...state,
                foodItem: action.payload,
            };
        default:
            return state;
    }
}