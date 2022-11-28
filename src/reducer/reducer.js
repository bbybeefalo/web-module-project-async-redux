import { GET_DOGGO, GET_DOGGO_SUCCESS, SET_IS_FETCHING } from "../actions/actions";

const initialState = {
    img: "",
    isFetching: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_FETCHING:
            return {...state, isFetching: action.payload}
        case GET_DOGGO_SUCCESS:
            return {...state, img: action.payload}
        case GET_DOGGO:
            return state;
        default:
            return state;
    }
}

export default reducer