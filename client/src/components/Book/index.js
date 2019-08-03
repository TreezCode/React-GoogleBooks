import React from "react";
import { Row, Col } from "../Grid";
import { ListItem } from "../List";
import "./Book.css";

const Book = ({ title, subtitle, authors, link, description, image, Button }) => (
    <ListItem>
        <Row>
            <Col size="md-9">
                <h4 className="book-title">{ title }</h4>
                <h5 className="book-title">{ subtitle }</h5>
                <p><small>Written by { authors }</small></p>
            </Col>
            <Col size="md-3">
                <div className="btn-wrap d-flex">
                    <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href={ link }>
                        View
                    </a>
                    <Button />
                </div>
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
                <hr className="mt-0"/>
                <div className="d-flex my-2">   
                    <img className="thumb pr-3" src={ image } alt={ title } />
                    <p>{ description }</p>
                </div>
            </Col>
        </Row>
    </ListItem>
);

export default Book;