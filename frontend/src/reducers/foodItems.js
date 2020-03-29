import {GET_FOOD_ITEMS, GET_SEARCH_RESULT} from '../actions/types.js'

const initialState = {
    foodItems: [],
    allFoodItems: []
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
            };
        default:
            return state;
    }
}