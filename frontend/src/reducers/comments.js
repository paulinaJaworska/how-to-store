import {SAVE_COMMENT} from '../actions/types';

const initialState = {};

export default function (state=initialState, action) {
    switch (action.type) {
        case SAVE_COMMENT:
            return {
                ...state,
            };
        default:
            return state
    }

}