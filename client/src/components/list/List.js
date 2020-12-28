import React from "react";
import Col from "react-bootstrap/Col";
//import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
// import { Col, Row, Container } from "../components/grid/Grid";
//import ListGroup from 'react-bootstrap/ListGroup'

//import Grid from "./components/grid/Grid";

function Book(props) {

    return (

        <li className="list-group-item">
            <Container>
                <Row>
                    {
                        <Image
                            xs={6} md={4}
                            top="true"
                            src={props.data.imageLinks.thumbnail}
                            alt="Book Pic" thumbnail
                        />
                    }
                    <Col>
                        <h1>{props.data.title}</h1>
                        <h4>{props.data.authors}</h4>
                        <p>{props.data.description}</p>
                        <p>{props.data.link}</p>

                        <ButtonToolbar aria-label="Toolbar with button groups">
                            <ButtonGroup className="mr-2" aria-label="first btn">
                                <Button variant="secondary"
                                    href={props.data.infoLink}
                                    role="button"
                                    rel="nonreferrer noopener"
                                    target="_blank"
                                >View
                                </Button>
                            </ButtonGroup>

                            <ButtonGroup className="mr-2" aria-label="second btn">
                                <Button variant="secondary">Save</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Container>
        </li>
    )


}

export default Book;