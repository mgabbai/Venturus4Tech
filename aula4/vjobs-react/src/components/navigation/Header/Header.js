import React from 'react';
import logo from '../../../assets/images/logo-h-vjobs.png';

const header = () => 
     ( 
        <nav className="navbar navbar-expand-lg navbar-light  bg-dark">
            <a className="navbar-brand" href="#">
                <img src={logo} style={{width: '100px'}}/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active text-white" href="#">Vagas</a>
                    <a className="nav-item nav-link text-white" href="#">Sobre</a>
                </div>
            </div>
        </nav>
    )

export default header;