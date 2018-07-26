import React, {Component} from 'react';
import JobCard from './JobsCard';
import vagas from '../../assets/vagas';
import Loading from '../navigation/Loading/Loading.js';
import axios from 'axios';
import JobsForm from '../../components/Job/JobsForm';
import Collapse from '../../components/hoc/Collapse/Collapse';

class JobList extends Component{

    state = {
        jobs: [],
        selectedId: null,
        hasError: false,
        hasJobs: false
    }

    constructor(){
        super();
    } 

    addItemToList = (newItem) => {
        let currentJobs = this.state.jobs;
        currentJobs.push(newItem);
        this.setState({jobs: currentJobs});
    }

    componentDidMount(){
        axios.get('/jobs').then((response) => {
            this.setState({jobs: response.data})
        }).catch(error =>{
            console.error(error)
        })
    }

    jobRemoveHandler = (id, nome) =>{
        if(window.confirm(`Deseja realmente excluir essa vaga ${nome}?`)){
            //axios.delete('/jobs/' + id, {'id' : id});
            axios.delete(`/jobs/${id}`)
              .then(res => {
                let vagasAtualizadas = this.state.jobs;
                const indiceRemovido = vagasAtualizadas.findIndex(item => item.id == id);
                vagasAtualizadas.splice(indiceRemovido, 1);
                this.state.jobs({jobs: vagasAtualizadas})
            }).catch(error =>{
                console.log(error);
            });
            window.location.reload();
        }
    }

    jobEditHandler = (id) => {
        window.alert("Editado com sucesso!")
    }
    
    render(){
        let jsxGerado = (this.state.jobs != undefined && this.state.jobs.length > 0) ?
         this.state.jobs.map(vaga => {
                return (
                    <div className = "col-sm-12 col-md-6 col-lg-4 mb-3" key={vaga.id}>
                        <JobCard name={vaga.name} area={vaga.area} 
                        description={vaga.description}
                        salary={vaga.salary} removeHandler={() => this.jobRemoveHandler(vaga.id,vaga.name)} editHandler={() => this.jobEditHandler(vaga.id)}></JobCard>
                    </div>
                ) 
            }) : <Loading/>;

        return(
            <div>
                <Collapse innerText="Criar Vaga" collapseId="formCollapse" classCollapse="btn-primary">
                    <JobsForm addToList={this.addItemToList}/>
                </Collapse>
                <div className="row ">
                    {jsxGerado}
                </div>
            </div>
        )
    }

}


export default JobList;