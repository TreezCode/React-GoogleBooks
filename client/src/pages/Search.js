import React, { Component } from "react";
import { Col, Row } from "../components/Grid";
import { List } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";
import Card from "../components/Card";
import Book from "../components/Book";
import API from "../utils/API";
import "./pages.css";

class Search extends Component {
    state = {
        books: [],
        title: "",
        message: "Search Google To Begin!"
    }

    // Method to handle input value change and set it to state
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // Method calls get request to Google for book data using title
    getGoogleBooks = () => {
    API.getGoogleBooks(this.state.title)
        .then(res => 
            this.setState({
                books: res.data
            })
        )
        .catch(() =>
            this.setState({
                books:[],
                message: "No New Books Found. Try A Different Title."
            })
        );
    }

    // Method to handle form submission
    handleFormSubmit = event => {
        event.preventDefault();
        this.getGoogleBooks();
    }

    // Method calls post request to create book data obj and save it in db
    handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id);
        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        })
        .then(() => this.getGoogleBooks())
    }

    render() {
        return (
            <>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                        <h1>
                            <span className="blue-font">G</span>
                            <span className="red-font">o</span>
                            <span className="yellow-font">o</span>
                            <span className="blue-font">g</span>
                            <span className="green-font">l</span>
                            <span className="red-font">e</span>
                            <span>Books Search</span>
                        </h1>
                        <h4>Search for and Save Books of Interest</h4>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card title="Book Search">
                            <Form
                                handleInputChange={ this.handleInputChange }
                                handleFormSubmit={ this.handleFormSubmit }
                                title={ this.state.title }
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        { this.state.books.length ? (
                        <Card title="Results">
                            <List>
                                { this.state.books.map(book => (
                                    <Book
                                        key={ book.id }
                                        title={ book.volumeInfo.title }
                                        subtitle={ book.volumeInfo.subtitle }
                                        authors={ book.volumeInfo.authors }
                                        link={ book.volumeInfo.infoLink }
                                        description={ book.volumeInfo.description }
                                        image={ book.volumeInfo.imageLinks.thumbnail }
                                        Button={ () => (
                                            <button className="btn btn-success" onClick={ () => this.handleBookSave(book.id) }>
                                                Save
                                            </button>
                                        ) }
                                    >
                                    </Book>
                                )) }
                            </List>
                        </Card>
                        ): <h2 className="text-center my-3">{ this.state.message }</h2> }
                    </Col>
                </Row>
            </>
        );
    }
}

export default Search;