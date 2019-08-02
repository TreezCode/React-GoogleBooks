import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";
import Book from "../components/Book";
import API from "../utils/API";

class Search extends Component {
    state = {
        books: [],
        title: "",
        message: "Search Google To Begin!"
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    searchGoogle = () => {
    API.searchGoogle(this.state.title)
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

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchGoogle();
    }

    handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id);
        
        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        })
        .then(() => this.getBooks())
    }

    render() {
        console.log(this.state)
        return (
            <Container>
                <Jumbotron>
                    <h1>Search</h1>
                </Jumbotron>
                <Row>
                    <Col size="md-12">
                        <Form
                            handleInputChange={ this.handleInputChange }
                            handleFormSubmit={ this.handleFormSubmit }
                            title={ this.state.title }
                        />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        {this.state.books.length ? (
                        <List>
                            {this.state.books.map(book => (

                                <Book
                                    key={ book.id }
                                    title={ book.volumeInfo.title }
                                    authors={ book.volumeInfo.authors }
                                    link={ book.volumeInfo.infoLink }
                                    description={ book.volumeInfo.description }
                                    image={ book.volumeInfo.imageLinks.thumbnail }
                                >
                                    <button className="btn btn-success" onClick={ () => this.handleBookSave(book.id) }>Save</button>
                                </Book>
                            ))}
                        </List>
                        ): <h2>{ this.state.message }</h2>}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Search;