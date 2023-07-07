import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useParams } from "react-router-dom";


function SearchedDocument() {
    const [state, setState] = useState([])
    const params = useParams();
    const msg=new SpeechSynthesisUtterance();


    const search = params.category;
    useEffect(() => {
        getData()
    }, [])
    
    const navigate = useNavigate();
    
  

    const getData = async () => {
        fetch("http://localhost:9000/documents/" + search)
        .then((res) => res.json())
        .then((json) => {
            setState(json)
    })
    }

    const toPost=(element)=>{
        navigate('/postdoc',{state:{title: element.title, content: element.content, category: element.category}});
    }
    const speechHandler=(element,msg)=>{
        msg.text=element.content;
        window.speechSynthesis.speak(msg);
    }

    return(
        <div>

            <h1>Category: {search}</h1>

            <Row xs={1} md={2} className="g-1">
            { state.map((element) =>(
                <Col>
                <div className="card text-white mb-3 homepostouterdiv" key={element._id}>
                    <img src="/images/card-img.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body homepostcard">
                    <h1 className="card-title">{ element.title }</h1>
                    <p className="card-text">{ element.content.substring(0, 200) + "..." }</p>
                    <p className="card-text"><b>Category: </b>{ element.category }</p>
                    <a onClick={() => toPost(element)} className="btn btn-outline-light">Read More</a>
                    <button onClick={()=>speechHandler(element,msg)} className="btn btn-md btn-outline-light" name="button">Listen Document</button>
                    </div>
                </div>
                </Col>
            ))}
            </Row>
        </div>
    )
}

export default SearchedDocument;