# React-GoogleBooks 📚

Demo: [GoogleBooks](https://googlebooks-treez.herokuapp.com/)
## About 📖
React-GoogleBooks is a react app which allows users to search and save books using a Google Books API.

## How to Use 🤔
The user is able to search for any book based on the title. The app will return the most relevant books 
found, along with a link to view on Google and a link to save the book to database.

<img src="https://media.giphy.com/media/VHekHG5ZeJjqEVEMzc/giphy.gif" alt="Google Books">

## How it Works 🔨
The app is structured with an MVC paradigm, which assists in logic modularization, allowing for code reuse and parallel development.

The front-end rendering is handled by *React*.
The two main pages `Search.js` and `Saved.js` are stateful components that hold methods which carry out the applications functionality.
```
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
```
```
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
```

In `googleController.js` a *findAll* method is created and exported, then later used to retrieve book data from the Google Books API.
```
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
```

## Pre-Requisites ✔️
To power this app locally, you'll need to a install a couple `NPM Packages`. Downloading the following Node packages is crucial for this applications functionality.
* Axios `npm i axios`
* Dotenv `npm i dotenv`
* Express `npm i express`
* If-env `npm i if-env`
* Mongoose `npm i mongoose`
* React `npm i react`
* React-Dom `npm i react-dom`
* React-Scripts `npm i react-scripts`

OR (preferably)

* Shorthand `npm i`

## Getting Started Locally🏁
The following steps will get you a copy of the application up and running on your local machine for testing and grading puproses.
1. Copy this repository from github by using clone.
2. Git clone repository in IDE of choice
3. Navigate to proper directory in IDE
4. If all pre-requisites are met, initalize the app by typing the command `npm run start`
5. The chosen port should automatically open in your browser and ENJOY!

## Built With 🔧
* [Axios](https://www.npmjs.com/package/axios) - Promise-based HTTP client for javascript that can be used in the front and backend of an application. 
* [Express](https://www.npmjs.com/package/express) - Node.js web app framework designed to make developing websites, web apps, & API's much easier.
* [Heroku](https://www.heroku.com/) - A cloud based platform that lets companies build, deliver, monitor and scale applications.
* [Javascript](https://www.javascript.com/) - JavaScript is the programming language of HTML and the Web
* [JSON](https://www.json.org/) - Javascript object notation, syntax for storing and exchanging information.
* [Mongoose](https://mongoosejs.com/docs/) - An object modeling tool for MongoDB. Manages relationships between data and translates between objects in code and the representation of them in MongoDB. 
* [MVC](https://www.geeksforgeeks.org/mvc-design-pattern/) - The Model-View-Controller is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller.
* [Node](https://nodejs.org/en/download/) - As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications. 
* [React](https://reactjs.org/) - Component based Javascript library used for creating interactive user interfaces specifically for single page layouts. 
 
## Creator ✋
**Joey Kubalak**

AKA 

👇

*Treez* 🌲

Github profile 👉 [TreezCode](https://github.com/TreezCode)