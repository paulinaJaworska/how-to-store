import axios from 'axios';
import {SAVE_COMMENT} from "./types";
import {returnErrors} from "./messages";

export const saveComment = ({comment}) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({comment});

    axios.post('api/comments/new', body, config)
        .then(res => {
            dispatch({
                type: SAVE_COMMENT,
                payload: res.data
            });
        }).catch(err => {
        dispatch(returnErrors(err.response.data, err.respose.status));
    })
};