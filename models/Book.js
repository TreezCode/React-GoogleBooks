const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    authors: { 
        type: [String],
        required: true 
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    title: {
        type: String, 
        required: true
    },
    googleId: {
        type: String, 
        required: true,
        unique: true 
    }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;