import React, { Component } from 'react';
import './App.css';
import Header from './components/navigation/Header/Header';
import JobsList from './components/Job/JobsList';
import Main from './components/navigation/Main/Main';
import {Switch, Route} from 'react-router-dom';
import About from './components/About/About';


class App extends Component {
    render() {
        return ( 
            <div className = "App">
                <Header/>
                <Main>
                    <Switch>
                        <Route exact path='/' component={JobsList}></Route>
                        <Route path='/vagas' component={JobsList}></Route>
                        <Route path='/sobre' component={About}></Route>
                    </Switch>
                </Main>    
            </div> 
        );
    }
}

export default App;