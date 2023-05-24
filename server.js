// Declare dependencies 
const express = require("express");

// Environment variable port
const PORT = process.env.PORT || 3001;

// Run express
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routers
const apiRouter = require("./routes/api");
const htmlRouter = require("./routes/html");

// Send all the requests that begin with /api to the api.js in the routes folder
app.use('/api', apiRouter);

// Set the homepage and notes html routes

app.use(htmlRouter);


// App listener to start the server
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);
