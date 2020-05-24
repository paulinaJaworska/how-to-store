import axios from 'axios';
import {returnErrors} from "./messages";
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "./types";

// Check token and load a user
export const loadUser = () => (dispatch, getState) => {
    // user loading
    dispatch({type: USER_LOADING});

    axios.get('api/auth/user', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        })
    })
};

// LOGIN USER
export const login = (username, password) => dispatch => {
    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // request body
    const body = JSON.stringify({username, password});

    axios.post('api/auth/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: LOGIN_FAIL
        })
    })
};

// logout user
export const logout = () => (dispatch, getState) => {
    // get token from state
    const token = getState().auth.token;

    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // if there is a token, add it to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.post('api/auth/logout', null, config)
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
    })
};

// REGISTER USER
export const register = ({username, password, email}) => dispatch => {
    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // request body
    const body = JSON.stringify({username, password});

    axios.post('api/auth/register', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: REGISTER_FAIL
        })
    })
};


export const tokenConfig = (getState) => {
    // get token from state
    const token = getState().auth.token;

    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // if there is a token, add it to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
};