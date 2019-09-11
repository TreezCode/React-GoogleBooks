const axios = require("axios");
const db = require("../models");
require('dotenv').config();

module.exports = {
    findAll: (req, res) => {
        const title = req.query.title.replace(/\s/g, "+");
        const apiKey = process.env.REACT_APP_GOOGLE_KEY;
        // Axios call to api with user input url
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${apiKey}`)
        // Filter results to assure title, infoLink, authors, description, & imageLinks present
        .then(results =>
            results.data.items.filter(result => 
                result.volumeInfo.title &&
                result.volumeInfo.infoLink &&
                result.volumeInfo.authors &&
                result.volumeInfo.description &&
                result.volumeInfo.imageLinks   
            )
        )
        // Filter results to avoid duplicate instances by comparing id to db googleId
        .then(apiBooks =>
            db.Book.find().then(dbBooks =>
                apiBooks.filter(apiBook =>
                    dbBooks.every(dbBook => dbBook.googleId !== apiBook.id)
                )
            )
        )
        // Send results to client
        .then(books => res.send(books))
        .catch(err => res.status(422).json(err))
    }
};