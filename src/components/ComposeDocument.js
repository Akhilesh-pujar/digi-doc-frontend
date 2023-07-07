import React, { useState } from "react";
import { useNavigate } from "react-router";
import BlackN from "./BlackNav";


function ComposeDocument() {

    const [inputs, setInputs] = useState({});
    const msg=new SpeechSynthesisUtterance();

    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (value.length >= 2000) {
            window.alert("Content field cannot contain more than 2000 characters.")
        }
        else setInputs(values => ({...values, [name]: value}))
    }
    
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:9000/composedoc", {
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
        navigate('/documents');
    }
    
    const speechHandler=(msg)=>{
        msg.text=inputs.content;
        window.speechSynthesis.speak(msg);
    }

 

    return(
        <div>
            <BlackN></BlackN>
            <h1 id="blbitheading">Extracted content from NFC</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                        <input
                            className="form-control" 
                            type="text"
                            placeholder="Bit Title"
                            name="title"
                            value={inputs.title}
                            onChange={handleChange}
                        />
                </div>
                <div className="form-group">
                        <textarea 
                            className="form-control"
                            cols="40" rows="10"
                            placeholder="Bit Content"
                            maxLength={3000}
                            name="content"
                            value={inputs.content}
                            onChange={handleChange}
                            required
                        />
                </div>
                <div className="form-group">
                        <input
                            className="form-control" 
                            type="text"
                            placeholder="Bit Category"
                            name="category"
                            value={inputs.category}
                            onChange={handleChange}
                        />
                </div>
                <div id="publishbtn">
                    <button type="submit" className="btn btn-md" name="button">Save Document</button>
                    <button onClick={()=>speechHandler(msg)} className="btn btn-md" name="button">Listen Document</button>

                </div>
            </form>
        </div>
    )
}

export default ComposeDocument;