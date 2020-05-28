import axios from "axios";

import {returnErrors} from "./messages";
import {GET_COMMENTS} from "./types";


export const getComments = (post_id) => dispatch => {
    axios.get(`/api/posts/${post_id}/comments/`)
        .then(res => {
            dispatch({
                type: GET_COMMENTS,
                payload: res.data
            });
        })
        .catch(err => dispatch(
            returnErrors(err.response.data, err.response.status)
        ));
};