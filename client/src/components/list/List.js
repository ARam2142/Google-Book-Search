import React from "react";
import { Row, Col, Container } from "../grid/Grid";
//import Grid from "./components/grid/Grid";

export function List({ children }) {
    return <ul className="list-group">{children}</ul>
}

export function ListItem({
    title,
    author, 
    description,
    link,
    deleteBook
}) {
    return (
    <li className="list-group-item">
        <Container>
            <Row>
                <Col size="xs-4 sm-3">
                    {/* A picture should go here */}
                </Col>
                <Col size="xs-8 sm-9">
                    <h3>{title}</h3>
                    <h5>{author}</h5>
                    <p>{description}</p>
                    <button className="btn"><a id="btn" rel="noreferrer noopener" target="_blank" href={link}>
                        View Book
                    </a></button>
                    <button className="btn" id="btn" onClick={() => deleteBook()}>Delete Book</button>
                </Col>
            </Row>
        </Container>
    </li>

    )

}


