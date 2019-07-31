const axios = require("axios");
const db = require("../models");
require('dotenv').config();

module.exports = {
    findAll: (req, res) => {
        // console.log(req.body);
        
        // const title = req.body.query.replace(/\s/g, "+");
        const apiKey = process.env.REACT_APP_GOOGLE_KEY;
        
        axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=holes&key=${apiKey}`)
            .then(results =>
                results.data.items.filter(
                result => 
                    result.volumeInfo.title &&
                    result.volumeInfo.infoLink &&
                    result.volumeInfo.authors &&
                    result.volumeInfo.description &&
                    result.volumeInfo.imageLinks   
                )
            )
            .then(apiBooks =>
                db.Book.find().then(dbBooks =>
                    apiBooks.filter(apiBook =>
                        dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id) 
                    )
                )
            )
            .then(books =>
                console.log(books)
            )
            .catch(err => res.status(422).json(err));
    }
};