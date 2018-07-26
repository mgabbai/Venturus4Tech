import React, {Component} from 'react';
import axios from 'axios';


class JobsForm  extends Component{

    state = {
        newJob: {}
   }

    postDataHandler = (event) =>{
        let novaVaga = {
            ...this.state.newJob
        };
        axios.post('/jobs', novaVaga).then(()=>{
            novaVaga.id = Response.data;
            this.props.addToList(novaVaga);
        }).catch(()=>{

        });

        //event.preventDefault();
    }

    changeValueHandler = (nomeAtributo, valor) => {
        let currentJob = this.state.newJob;

        currentJob[nomeAtributo] = valor;
        this.setState({newJob: currentJob});
    } 
    render(){
        return(
                    <form className="row mb-0">
                        <div className="form-group col-12">
                            <label htmlFor="nome">Nome</label>
                            <input onChange={(event) => this.changeValueHandler('name', event.target.value)} type="text" className="form-control" id="nome"/>
                        </div>
                        <div className="form-group col-12">
                            <label htmlFor="descricao">Descrição</label>
                            <textarea onChange = {
                                (event) => this.changeValueHandler('description', event.target.value)
                            }
                            className="form-control" id="descricao" rows="3"></textarea>
                        </div>
                        <div className="form-group col-sm-12 col-md-6">
                            <label htmlFor="habilidades">Habilidades necessárias</label>
                            <textarea onChange = {
                                (event) => this.changeValueHandler('skills', event.target.value)
                            }
                            className="form-control" id="habilidades" rows="3"></textarea>
                        </div>
                        <div className="form-group col-sm-12 col-md-6">
                            <label htmlFor="diferenciais">Diferenciais</label>
                            < textarea onChange = {
                                (event) => this.changeValueHandler('differentials', event.target.value)
                            }
                            className="form-control" id="diferenciais" rows="3"></textarea>
                        </div>
                        <div className="form-group col-sm-12 col-md-6">
                            <label htmlFor="salario">Salário Base</label>
                            <input onChange = {
                                (event) => this.changeValueHandler('salary', event.target.value)
                            }
                             type="text" className="form-control" id="salario"/>
                        </div>
                        <div className="form-group col-sm-12 col-md-6">
                            <label htmlFor="area">Área</label>
                            <select onChange = {
                                (event) => this.changeValueHandler('area', event.target.value)
                            }
                            className = "form-control"
                            id = "area" >
                                <option disabled selected> Selecione...</option>
                                <option>Desenvolvimento</option>
                                <option>Design</option>
                                <option>Teste</option>
                            </select>
                        </div>
                        <div className="form-group form-check col-sm-12 col-md-6 ml-3">
                            <input onChange = {
                                (event) => this.changeValueHandler('isPcd', event.target.value)
                            }
                            type = "checkbox"
                            className = "form-check-input"
                            id = "isPCD" />
                            <label className="form-check-label" htmlFor="isPCD">Vaga para PCD</label>
                        </div>

                        <div className="form-group col-12 text-right mb-0">
                            <button type="submit" className="btn btn-success" onClick={this.postDataHandler}>Salvar</button>
                        </div>

                    </form>
        )
    }
}
   
export default JobsForm;