import React from 'react';
import developerImg from '../../assets/images/developer.png';
import testerImg from '../../assets/images/tester.png';
import designerImg from '../../assets/images/designer.png';

const jobsCard = (props) => {

    let imagem = null;

    switch(props.area){
        case 'Desenvolvimento':
            imagem = developerImg;
            break;
        case 'Design':
            imagem = designerImg;
            break;
        case 'Teste':
            imagem = testerImg;
            break;
        default:
            imagem = null;
            break;
    }


return (
        <div className="card">
            <img className="card-img-top" src={imagem} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div>
                    <b>Descrição:</b>
                    <p>{props.description}</p>
                    <b>Salário base:</b>
                    <p>R$ {props.salary}</p>
                </div>
                <button onClick={props.editHandler} className="btn btn-warning"><i className="fas fa-edit mr-l"> Editar</i></button> 
                <button onClick={props.removeHandler} className="btn btn-danger"><i className="far fa-trash-alt mr-l"> Excluir</i></button>
            </div>
        </div>
)}

export default jobsCard;