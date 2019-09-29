// Require the express package
const express = require('express');

// Create express server
const app = express();

// Set initial port
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Routes

// server is listening
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT)
});