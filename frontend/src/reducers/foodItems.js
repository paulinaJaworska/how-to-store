import {GET_FOOD_ITEMS} from '../actions/types.js'

const initialState = {
    foodItems: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FOOD_ITEMS:
            return {
                ...state,
                foodItems: action.payload,
            };
        default:
            return state;
    }
}