const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = 6969;

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get("/todays-events", (req, res) => {
    /* Sent daily by the BOT to check if there are any events today */
    const today = new Date();
});