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

app.get('/vagas', async(req, res) => {
    return res.send(vagas);
})

//This get not work yet
app.get('/vagas/:id', async(req, res) => {
    let id = req.params.id;
    let find = vagas.filter(id);
    return res.send(find);
})
app.post('/vagas', async(req, res) => {
    try {
        let vagasLength = vagas.length;
        let vaga = createVaga(req.body);
        vagas.push(vaga);
        if (vagas.length > vagasLength) return res.send('Added');
        return res.status(500).send('Internal Error');
    } catch (error) {
        return res.status(500).send('Internal Error');
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

const createVaga = (obj) => new Vaga(
    obj.id, obj.name, obj.description, obj.skills, obj.salary, obj.area, obj.differentials, obj.isPcd, obj.isActive
)