import axios from "axios";
import React, { useEffect } from "react";
import { UserReducer } from "./UserReducer";

const Counter = () => {
    const [users, dispatch] = UserReducer();
    useEffect(() => {
        dispatch({ type: "FETCH_REQUEST" });
        axios
            .get("https://jsonplaceholder.typicode.com/users/")
            .then((res) => {
                dispatch({ type: "FETCH_SUCCESS", payload: res.data });
            })
            .catch((error) => {
                dispatch({ type: "FETCH_ERROR" });
            });
    }, []);
    const { loading, data, error } = users;
    
    return (
        <div>
            {loading && <p>Loading....</p>}
            {data !== null && <pre>{JSON.stringify(data)}</pre>}
            {error !== null && <p>{error}</p>}
        </div>
    );
};
export default Counter;
