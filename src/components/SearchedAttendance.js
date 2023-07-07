import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function SearchedAttendance() {
    const [state, setState] = useState([])
    const params = useParams();

    const search = params.mis;
    useEffect(() => {
        getData()
    }, [])
    
    const navigate = useNavigate();
    

    const getData = async () => {
        fetch("http://localhost:9000/attendances/" + search)
        .then((res) => res.json())
        .then((json) => {
            setState(json)
    })
    }

    const toPost=(element)=>{
        navigate('/postattend',{state:{degree: element.degree, branch: element.branch, mis: element.mis, timeIn: element.timeIn}});
    }

    return(
        <div>
            <h1>mis: {search}</h1>

            <Row xs={1} md={2} className="g-4">
            { state.map((element) =>(
                <Col>
                <div className="card text-white mb-3 homepostouterdiv" key={element._id}>
                    <img src="/images/card-img.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body homepostcard">
                    <h1 className="card-title">{ element.degree }</h1>
                    <h3><b>TimeIn: </b>{element.timeIn}</h3>
                    <h5>{element.branch}</h5>
                    <p className="card-text"><b>mis: </b>{ element.mis }</p>
                    <a onClick={() => toPost(element)} className="btn btn-outline-light">Read More</a>
                    </div>
                </div>
                </Col>
            ))};
            </Row>
        </div>
    )
}

export default SearchedAttendance;