import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import { List } from "../components/List";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Book from "../components/Book";
import API from "../utils/API";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.getSavedBooks();
    }

    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(err => console.log(err));
    }

    handleBookDelete = id => {
        API.deleteBook(id)
            .then(res => this.getSavedBooks());
    }

    render() {
        return (
            <>
                <Navbar />
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <Jumbotron>
                                <h1>Saved</h1>
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            { this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => (
                                    <Book
                                        key={ book._id }
                                        title={ book.title }
                                        authors={ book.authors }
                                        link={ book.link }
                                        description={ book.description }
                                        image={ book.image }
                                        Button={ () => (
                                            <button className="btn btn-success" onClick={ () => this.handleBookDelete(book._id) }>
                                                Delete
                                            </button>
                                        )}
                                    >
                                    </Book>
                                ))}
                            </List>
                            ): <h2>You Have No Books Saved...</h2> }
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Saved;