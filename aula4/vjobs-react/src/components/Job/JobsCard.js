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
        case 'Designer':
            imagem = designerImg;
            break;
        case 'Tester':
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
                <a href="#" class="btn btn-warning"><i class="fas fa-edit"></i></a>
                <a href="#" class="btn btn-danger"><i class="far fa-trash-alt"></i></a>
            </div>
        </div>
)}

export default jobsCard;