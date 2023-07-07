import React from "react";
import { useLocation } from "react-router-dom";

function PostAttendance() {
    const { state } = useLocation();
    console.log(state);
    return (
        <div className="card postcard">
        <div className="card-body">
            <h1>{state.degree}</h1>
            <h4>{state.branch}</h4>
            <p>mis: {state.mis}</p>
            <p>{state.timeIn}</p>
        </div>
        </div>
    );
};

export default PostAttendance;