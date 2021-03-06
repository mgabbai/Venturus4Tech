'use strict';

const Job = require('../../model/job');
const fbConfig = require('../../config/firebaseConfig');
module.exports = app => {

    const jobsCollection = app.config.firebaseConfig.collection('jobs');

    app.get('/jobs', async(req, res) => {
        try {
            const docs = await jobsCollection.get();
            let jobs = [];
            docs.forEach(doc => {
                jobs.push(extractJob(doc));
            })
            return res.send(jobs);
        } catch (error) {
            return res.status(500).send('error');
        }

    })

    app.get('/', async(req, res) => {
        return res.redirect('http://localhost:3000/vjobs/index.html');
    })

    //not work yet
    app.get('/jobs/:id', async(req, res) => {

        let jobsRef = fbConfig.collection('jobs');
        let query = jobsRef.where(req.params.id, '==', true).get().then(snapshot => {
            snapshot.forEach(doc => {
                return res.send(doc.id, '=>', doc.data());
            });
        }).catch(err => {
            console.log('Error getting documents', err);
        })

    })

    // var citiesRef = db.collection('cities');
    // var query = citiesRef.where('capital', '==', true).get()
    //     .then(snapshot => {
    //         snapshot.forEach(doc => {
    //             console.log(doc.id, '=>', doc.data());
    //         });
    //     })
    //     .catch(err => {
    //         console.log('Error getting documents', err);
    //     });

    app.post('/jobs', async(req, res) => {
        try {

            const fbReturn = await jobsCollection.doc().set(req.body);
            if (fbReturn) {
                return res.send('Adicionado com sucesso');
            } else {
                throw Error;
            }
        } catch (error) {
            return res.status(500).send(error);
        }
    })

    app.put('/jobs/:id', async(req, res) => {
        try {
            if (!req.body) {
                return res.status(403).send('Para alterar um usuário, é necessário passar algum valor');
            }
            let index = await jobs.findIndex(job => job.id === req.params.id);
            if (index >= 0) {
                Object.keys(req.body).forEach(job => {
                    jobs[index][job] = req.body[job]
                })
                return res.send(`Vaga com o id ${req.params.id} alterada com sucesso`);
            }
            return res.send("nao foi encontrado vaga com esse id");
        } catch (error) {
            return res.status(500).send(error);
        }
    })

    app.delete('/jobs/:id', async(req, res) => {
        try {
            let length = jobs.length;
            jobs.splice(jobs.findIndex(el => el.id === req.params.id), 1);
            if (jobs.length < length) return res.send(`A vaga com o id ${req.params.id} com successo`);
            else return res.status(500).send(`Não foi possível deletar a vaga ${req.params.id}`);
        } catch (error) {
            return res.status(500).send(error);
        }
    })


    const extractJob = (job) => {
        let v = job.data();
        return {
            id: job.id,
            name: v.name,
            description: v.description,
            skills: v.skills,
            differentials: v.differentials,
            isPcd: v.isPcd,
            isActive: v.isActive
        }
    }

    const createJob = (obj) => new Job(
        obj.id,
        obj.name,
        obj.description,
        obj.skills,
        obj.salary,
        obj.area,
        obj.differentials,
        obj.isPcd,
        obj.isActive
    )

}