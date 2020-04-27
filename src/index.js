'use strict'

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./app/controller/index')(app);

app.listen(8080);