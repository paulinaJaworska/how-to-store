import axios from 'axios';
import {SAVE_COMMENT} from "./types";
import {createMessage, returnErrors} from "./messages";

export const addComment = (post, content) => (dispatch, getState) => {
    const token = getState().auth.token;

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // if there is a token, add it to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }


    const body = JSON.stringify({post, content});

    axios.post(`api/comments/`, body, config)
        .then(res => {
            dispatch(createMessage({addComment: 'Comment added'}));
            dispatch({
                type: SAVE_COMMENT,
                payload: res.data
            });
        }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
    })
};