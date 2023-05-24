// Declare dependencies
const express = require('express');
// Use the router function included in express  
const router = express.router();
// Use fs function to read and write files
const fs = require("fs");
// Get the databse json file
let notes = require("../db/db.json");
// Use the uniqid package 
const uniqid = require("uniqid");

//GET /api/notes should read the db.json file and return all saved notes as JSON
router.get("/notes", (req, res) => {
    console.info(`${req.method} request received for tips`);
    res.json(notes);
});

//POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client using a unique identifier

router.post("/notes", (req, res) => {
    const {title, text} = req.body;

    if

}); 


module.exports = app;
