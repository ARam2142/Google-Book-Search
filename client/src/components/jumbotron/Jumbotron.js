import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function Jumbo() {
  return (
      <Jumbotron className="text-center" fluid>
        <Container>
          <h1>Welcome to Google Books</h1>
        </Container>
      </Jumbotron>

  )
}
export default Jumbo;
