const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
let vagas = require('./config/vagas');
const Vaga = require('./model/vaga');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async(req, res) => {
    return res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})