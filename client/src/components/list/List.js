import React from "react";
import Col from "react-bootstrap/Col";
//import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Image from "react-bootstrap/Image";
// import { Col, Row, Container } from "../components/grid/Grid";
//import ListGroup from 'react-bootstrap/ListGroup'

//import Grid from "./components/grid/Grid";

function Book(props) {

    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    {
                        //(props.info.image || props.info.imageLinks.thumbnail)? 
                        <Image
                            xs={6} md={4}
                            top="true"
                            src={props.info.imageLinks.thumbnail}
                            alt="Book Pic" thumbnail
                        />
                        //:<h4 className="text-center">
                        //No Image provided by Google Books
                        //</h4> 
                    }
                    <Col>
                        <h1>{props.info.title}</h1>
                        <h4>{props.info.authors}</h4>
                        <p>{props.info.description}</p>
                        <p>{props.info.link}</p>
                    </Col>
                </Row>
            </Container>
        </li>
    )


}

export default Book;