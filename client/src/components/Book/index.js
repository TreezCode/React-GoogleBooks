import React from "react";
import { Row, Col } from "../Grid";
import { ListItem } from "../List";
import "./Book.css";

const Book = ({ title, authors, link, description, image }) => (
    <>
        <ListItem>
            <Row>
                <Col size="md-9">
                    <h3>{ title }</h3>
                </Col>
                <Col size="md-3">
                    <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href={ link }>View</a>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <p>Written by { authors }</p>
                </Col>
            </Row>
            <Row>
                <Col size="md-4">
                    <img className="img-fluid w-100" src={ image } alt={ title } />
                </Col>
                <Col size="md-8">
                    <p>{ description }</p>
                </Col>
            </Row>
        </ListItem>
    </>
);

export default Book;