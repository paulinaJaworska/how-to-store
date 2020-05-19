import {combineReducers} from "redux";
import foodItems from './foodItems';
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
    foodItems,
    errors,
    messages,
    auth
})