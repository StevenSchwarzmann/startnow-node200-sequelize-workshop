const express = require('express');
const sequelize = require('sequelize');
const bodyParser = require('body-parser');
const db = require('./db/models');

// Sequelize Configuration
db.sequelize.sync();

const app = express();

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.status(200).send();
});

module.exports = app;