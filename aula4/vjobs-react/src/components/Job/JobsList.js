import React, {Component} from 'react';
import JobCard from './JobsCard';

class JobList extends Component{
    constructor(){
        super();
    }

    render(){
        return(
             <div className="row ">
                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                    <JobCard name="Desenvolvedor Front-end JR" area="Desenvolvimento" description="Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento full stack." salary="3000"></JobCard>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                    <JobCard name="Designer UI/UX PL    " area="Designer" description="Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento full stack." salary="50"></JobCard>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                    <JobCard name="Tester - Estágio" area="Tester" description="Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento full stack." salary="10"></JobCard>
                </div>
            </div>
        )
    }

}


export default JobList;