// program title view
import { Container } from "react-bootstrap";
import Aggregate from "../components/Aggregate";

import React from "react";

const Program = () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Elije tu mejor acompañamiento para tu fiestasss</h1>
      <Aggregate />
    </Container>
  );
};

export default Program;
