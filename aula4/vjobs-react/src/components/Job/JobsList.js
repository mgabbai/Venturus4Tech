import React, {Component} from 'react';
import JobCard from './JobsCard';
import vagas from '../../assets/vagas';
import Loading from '../navigation/Loading/Loading.js';

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

   

    componentDidMount(){
        this.setState({jobs: vagas});
    }

    jobRemoveHandler = (id, nome) =>{
        if(window.confirm(`Deseja realmente excluir essa vaga ${nome}?`)){
            window.alert(`Vaga excluida com sucesso!`);
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
             <div className="row ">
                {jsxGerado}
            </div>
        )
    }

}


export default JobList;