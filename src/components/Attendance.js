import React from "react";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import NavSearch from "./NavSearchAttendance";
import Scan from "../containers/Scan";
import Write from "../containers/Write";
import { ActionsContext } from "../contexts/context";

function MarkAttend() {
  const [state, setState] = useState([]);
  const [actions, setActions] = useState(null);
  const { scan, write } = actions || {};

  const actionsValue = { actions, setActions };

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();

  const toCompose = () => {
    navigate("/composeattend");
  };
  const onHandleAction = (actions) => {
    setActions({ ...actions });
    setTimeout(toCompose, 3000);
  };

  const getData = async () => {
    fetch("http://localhost:9000/attend")
      .then((res) => res.json())
      .then((json) => {
        setState(json);
      });
  };

  const toPost = (element) => {
    navigate("/postattend", {
      state: {
        degree: element.degree,
        branch: element.branch,
        mis: element.mis,
        timeIn: element.timeIn,
      },
    });
  };

  return (
    <div>
      <Card className="bg-light blog-card">
        <Card.Img src="/images/card.png" alt="Card image" />
        <Card.ImgOverlay>
          <NavSearch></NavSearch>
          <Card.Title className="blog-card-title">
            <h1>Experience new way of marking your presense</h1>
          </Card.Title>
          <Card.Text>
            <button
              id="blogbit-button"
              onClick={() => onHandleAction({ scan: 'scanning', write: null })}
            >
              Mark present
            </button>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <ActionsContext.Provider value={actionsValue}>
        {scan && <Scan />}
        {write && <Write />}
      </ActionsContext.Provider>

      <Row xs={1} md={2} className="g-4">
        {state.map((element) => (
          <Col>
            <div
              className="card text-white mb-3 homepostouterdiv"
              key={element._id}
            >
              <img
                src="/images/Snipabit.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body homepostcard">
                <h1 className="card-title">{element.degree}</h1>
                <h3>
                  <b>TimeIn: </b>
                  {element.timeIn}
                </h3>
                <h5>{element.branch}</h5>
                <p className="card-text">
                  <b>mis: </b>
                  {element.mis}
                </p>
                <a
                  onClick={() => toPost(element)}
                  className="btn btn-outline-light"
                >
                  Read More
                </a>
              </div>
            </div>
          </Col>
        ))}
        ;
      </Row>
    </div>
  );
}

export default MarkAttend;
