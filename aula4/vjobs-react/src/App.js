import React, { Component } from 'react';
import './App.css';
import Header from './components/navigation/Header/Header';
import JobsList from './components/Job/JobsList';
import JobsForm from './components/Job/JobsForm';


class App extends Component {
    render() {
        return ( 
            <div className = "App">
                <Header/>
                
                <div className="container pt-3">
                    <JobsForm/>
                    <JobsList/>
                </div>
            </div> 
        );
    }
}

export default App;