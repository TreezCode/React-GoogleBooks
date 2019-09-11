import React, { Component } from "react";
import { Row, Col } from "../components/Grid";
import { List } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import Book from "../components/Book";
import API from "../utils/API";
import Card from "../components/Card";
import "./pages.css"

class Saved extends Component {
    state = {
        books: []
    };
    // Wait for all elements of DOM to render
    componentDidMount() {
        this.getSavedBooks();
    };

    // Method to get saved books data from db and set as state
    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(err => console.log(err));
    };

    // Method to delete book from db by id
    handleBookDelete = id => {
        API.deleteBook(id)
            .then(res => this.getSavedBooks());
    };

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
                                <span>Books Saved</span>
                            </h1>
                            <h4>Search for and Save Books of Interest</h4>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        { this.state.books.length ? (
                        <Card title="Saved Books">
                            <List>
                                { this.state.books.map(book => (
                                <Book
                                    key={ book._id }
                                    title={ book.title }
                                    subtitle={ book.subtitle }
                                    authors={ book.authors }
                                    link={ book.link }
                                    description={ book.description }
                                    image={ book.image }
                                    Button={ () => (
                                        <button className="btn btn-danger" onClick={ () => this.handleBookDelete(book._id) }>
                                            Delete
                                        </button>
                                    )}
                                >
                                </Book>
                                )) }
                            </List>
                        </Card>
                        ): <h2 className="text-center">You Have No Books Saved...</h2> }
                    </Col>
                </Row>
            </>
        );
    }
}

export default Saved;