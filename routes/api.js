const express = require('express');

// Create an instance of express so we can apply the middleware and routing
const app = express();

app.use('/feedback', feedbackRouter);
app.use('/tips', tipsRouter);

module.exports = app;
