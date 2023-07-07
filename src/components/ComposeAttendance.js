import React, { useState } from "react";
import { useNavigate } from "react-router";
import BlackN from "./BlackNav";

function ComposeAttendance() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (value.length >= 20) {
            window.alert("Content field cannot contain more than 2000 characters.")
        }
        else setInputs(values => ({ ...values, [name]: value }))
    }

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:9000/composeattend", {
            method: "POST",
            body: JSON.stringify(inputs),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.status === 200) {
                setInputs({});
            }
        }).catch((err) => {
            console.log(err);
        });
        navigate('/attendances');
    }

    return (
        <div>
            <BlackN></BlackN>
            <h1 id="bkbitheading">Mark Attendance</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Degree"
                        name="degree"
                        value={inputs.degree}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Your Branch"
                        name="branch"
                        value={inputs.branch}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Enter your RollNo"
                        name="mis"
                        value={inputs.mis}
                        onChange={handleChange}
                        required
                    />
                </div>

                
                <div id="insertbtn">
                    <button type="submit" className="btn btn-md" name="button">Mark Present</button>
                </div>
            </form>
        </div>
    )
}

export default ComposeAttendance;