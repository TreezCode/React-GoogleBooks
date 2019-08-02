import axios from "axios";

export default {
    // Search google for books by title
    searchGoogle: function(title) {
        return axios.get("/api/google", { params: { title } });
    },
    // Gets all saved books
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};