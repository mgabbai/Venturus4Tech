import React, { Component } from 'react';
import './App.css';
import Header from './components/navigation/Header/Header';
import JobsList from './components/Job/JobsList';
import JobsForm from './components/Job/JobsForm';
import Collapse from './components/hoc/Collapse/Collapse';
import Loading from './components/navigation/Loading/Loading';


class App extends Component {
    render() {
        return ( 
            <div className = "App">
                <Header/>
                
                <div className="container pt-3">
                    <Collapse innerText="Criar Vaga" collapseId="formCollapse" classCollapse="btn-primary">
                        <JobsForm/>
                    </Collapse>
                    {/*<Collapse innerText="Mostrar Vaga" collapseId="listCollapse" classCollapse="btn-secondary">
                        <JobsList/>
                    </Collapse>*/}
                    <JobsList/>                   
                </div>
            </div> 
        );
    }
}

export default App;