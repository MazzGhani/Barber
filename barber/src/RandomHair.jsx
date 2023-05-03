import ReactCurvedText from "react-curved-text";
import React, { useState } from "react";
import img1 from "../src/assets/img1.jpeg";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "./randomHair.css";

function RandomHair() {
  return (
    <>
      <div className="text-center" style={{ fontSize: "30px" }}>
        <ReactCurvedText
          width={370}
          height={100}
          cx={190}
          cy={160}
          rx={100}
          ry={135}
          startOffset={100}
          reversed={true}
          text="My Canvases"
        />
      </div>
      <Row lg={2} className="mx-auto" style={{ width: "50%" }}>
        <Card className="cardBorder" >
          <Card.Img variant="top" src={img1} />
        </Card>
        <Card className="cardBorder">
          <Card.Img variant="top" src={img1} />
        </Card>
        <Card className="cardBorder">
          <Card.Img variant="top" src={img1} />
        </Card>

      </Row>
    </>
  );
}

export default RandomHair;
