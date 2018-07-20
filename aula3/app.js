'use strict';

const app = require('./config/server');
const port = 3000;
const express = require('express')

app.use('/vjobs', express.static(__dirname + '/app/static'));


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})