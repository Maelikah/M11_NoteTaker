// Declare dependencies
const express = require('express');
// Use the router function included in express  
const router = express.Router();
// Use fs function to read and write files
const fs = require("fs");
// Get the databse json file
let notes = require("../db/db.json");
// Use the uniqid package 
const uniqid = require("uniqid");
1// Use the color coding custom middleware
const { clog } = require('../middleware/clog');

// Import custom middleware, "clog to handle color coded console logs
router.use(clog);

//GET /api/notes should read the db.json file and return all saved notes as JSON
router.get("/notes", (req, res) => {
    res.json(notes);
});

//POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client using a unique identifier

router.post("/notes", (req, res) => {
    const {title, text} = req.body;

    // add unique id to note
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uniqid(),
        };
    
        // Push new note into the json file
        notes.push(newNote);

        // Stringify notes
        let noteString = JSON.stringify(notes);

        // Overwrite file with new data
        fs.writeFile(`./db/db.json`, noteString, (err) =>
        err
            ? console.error(err)
            : console.log (`Sucessfully added a new note`)
        );

        // console.log(response);
        // // 201 = request has succeeded and has led to the creation of a resource
        res.status(201).json(newNote);
    } 
    
    else {
        // 500 = server-side error
        res.status(500).json('Error in adding note');
    }
}); 

// DELETE /api/notes/:id 
router.delete('/notes/:id', (req, res) => {
    const { id } = req.params;

    fs.readFile("./db/db.json", "utf8", (error, data) =>
    error ? console.error(error) : (notes = JSON.parse(data))
    );

    const deletedNote = notes.filter(note => note.id === req.params.id)

    if(deletedNote) {
        let filteredNotes = notes.filter(note => note.id != req.params.id)
        let noteString = JSON.stringify(filteredNotes);
        fs.writeFile(`./db/db.json`, noteString, (err) =>
        err
        ? console.error(err)
        : console.log(`Note deleted!`));

        res.status(200).json(filteredNotes);
    } else {
        res.status(500).json('Error trying to delete note');
    }
});

module.exports = router;

// Final Review