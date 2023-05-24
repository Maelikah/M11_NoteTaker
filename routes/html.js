// Declare dependencies
const express = require("express");
const path = require("path");
// Use the router function included in express  
const router = express.Router();

// Get index.html as main page

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../routes/public/index.html"))
});

// Get notes.html 

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../routes/public/notes.html"))
});

module.exports = router;