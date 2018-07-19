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
    return res.send(vagas.find(el => el.id == req.params.id));
})

app.put('/vagas/:id', async(req, res) => {
    try {
        if (!req.body) {
            return res.status(403).send('Necessário algo para trocar');
        }
        let index = await vagas.findIndex(job => job.id === req.params.id);
        if (index >= 0) {
            Object.keys(req.body).forEach(job => {
                vagas[index][job] = req.body[job]
            })
            return res.send(`Vaga ${req.params.id} alterada`)
        }
        return res.send('Não foi encontrada a vaga com esse id')
    } catch (error) {
        return res.status(403).send('Necessário algo para trocar');
    }
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