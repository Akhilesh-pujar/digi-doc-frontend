import React from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import NavSearch from "./NavSearchDocument";
import Scan from "../containers/Scan";
import Write from "../containers/Write";
import { ActionsContext } from "../contexts/context";

function Docs() {
  const [state, setState] = useState([]);
  const [actions, setActions] = useState(null);
  const { scan, write } = actions || {};

  const actionsValue = { actions, setActions };

  const msg = new SpeechSynthesisUtterance();

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();

  const toCompose = () => {
    navigate("/composedoc");
  };

  const onHandleAction = (actions) => {
    setActions({ ...actions });
    setTimeout(toCompose, 3000);
  };

  const getData = async () => {
    fetch("http://localhost:9000/")
      .then((res) => res.json())
      .then((json) => {
        setState(json);
      });
  };

  const speechHandler = (element, msg) => {
    msg.text = element.content;
    window.speechSynthesis.speak(msg);
  };

  const toPost = (element) => {
    navigate("/postdoc", {
      state: {
        title: element.title,
        content: element.content,
        category: element.category,
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
            <h1>Experience new way of Reading documents</h1>
          </Card.Title>
          <Card.Text>
            <button
              id="blogbit-button"
              onClick={() => onHandleAction({ scan: "scanning", write: null })}
            >
              Scan Document
            </button>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <ActionsContext.Provider value={actionsValue}>
        {scan && <Scan />}
        {write && <Write />}
      </ActionsContext.Provider>
      {console.log(state)}
      <Row xs={1} md={2} className="g-1">
        {state.map((element) => (
          <Col>
            <div
              className="card text-white mb-3 homepostouterdiv"
              key={element._id}
            >
              <img
                src="/images/card-img.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body homepostcard">
                <h1 className="card-title">{element.title}</h1>
                <p className="card-text">
                  {element.content.substring(0, 200) + "..."}
                </p>
                <p className="card-text">
                  <b>Category: </b>
                  {element.category}
                </p>
                <a
                  onClick={() => toPost(element)}
                  className="btn btn-outline-light"
                >
                  Read More
                </a>
                <button
                  onClick={() => speechHandler(element, msg)}
                  className="btn btn-md btn-outline-light"
                  name="button"
                >
                  Listen Document
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Docs;
