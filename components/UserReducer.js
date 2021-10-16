import {useReducer} from 'react'

const initialState = {
    loading: false,
    data: null,
    error: null,
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case "FETCH_ERROR":
            return {
                ...state,
                loading: false,
                error: "Something went wrong",
            };
    }
};

export const UserReducer = () =>{
    return useReducer(reducer, initialState);
}