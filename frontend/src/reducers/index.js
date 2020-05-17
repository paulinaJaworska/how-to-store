import {combineReducers} from "redux";
import foodItems from './foodItems';
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
    foodItems,
    errors,
    messages,
})