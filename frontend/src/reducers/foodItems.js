import {GET_FOOD_ITEMS, GET_SEARCH_RESULT, GET_FOOD_ITEM, GET_CLICKED_ITEM_ID} from '../actions/types'

const initialState = {
    foodItems: [],
    allFoodItems: [],
    foodItem: {},
    currentlyDisplayedItem: null
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
        case GET_CLICKED_ITEM_ID:
            return {
                ...state,
                currentlyDisplayedItem: action.payload
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