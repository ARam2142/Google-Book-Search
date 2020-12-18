import React from "react";
import { Row, Col, Container } from "../grid/Grid";
//import Grid from "./components/grid/Grid";

function List(props) {
    return (
    <li className="list-group-item">
        <Container>
            <Row>
                <Col size="xs-4 sm-3">
                    {/* A picture should go here */}
                </Col>
                <Col size="xs-8 sm-9">
                    <h3>{props.title}</h3>
                    <h5>{props.author}</h5>
                    <p>{props.description}</p>
                    <button className="btn"><a id="btn" rel="noreferrer noopener" target="_blank" href={props.link}>
                        View Book
                    </a></button>
                    {/* <button className="btn" id="btn" onClick={() => deleteBook()}>Delete Book</button> */}
                </Col>
            </Row>
        </Container>
    </li>

    )
}

export default List;