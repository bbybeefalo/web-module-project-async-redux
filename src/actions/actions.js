export const GET_DOGGO = 'GET_DOGGO';
export const GET_DOGGO_SUCCESS = 'GET_DOGGO-SUCCESS';
export const GET_DOGGO_ERROR = 'GET_DOGGO_ERROR';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';
import axios from 'axios';

export const getDoggo = () => dispatch => {
    dispatch(setIsFetching(true));
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
        dispatch(getDoggoSuccess(res.data.message));
        dispatch(setIsFetching(false));
    })
};

const setIsFetching = (isFetching) => {
    return {type: SET_IS_FETCHING, payload: isFetching}
}

const getDoggoSuccess = (doggo) => {
    return {type: GET_DOGGO_SUCCESS, payload: doggo}
}