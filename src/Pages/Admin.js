import React, { Component } from 'react';
import '../assets/css/App.css';
import NavegadorAdmin from '../Component/navAdmin'
import Rodape from '../Component/footer'
import Divsessao from '../Component/divsessao';

export default class Admin extends Component{

    constructor(){
        super();
        this.state ={
            lista :[],
            nome:""
        }
    }
    componentDidMount(){
        this.listarCategoria();
    }
    listarCategoria = () =>{
        fetch('http://localhost:5000/api/categoria')
        .then(response => response.json())
        .then(data => this.setState({lista: data}));   
    }

    deslogar = () => {
        localStorage.removeItem("chaveOpflix");
    }
    cadastrarNome = (event) => {
        this.setState({nome : event.target.value})
    };
    cadastrarCategoria = (event) =>{
        event.preventDefault();

        //fatch
        fetch('http://localhost:5000/api/categoria',{
            //method
            method:"POST",
            //body
            body: JSON.stringify({NomeCategoria: this.state.nome}),
            //headers
            headers:{
                "Content-Type" : "application/json"
            }
            //then
        })
            .then(response => this.listarCategoria())
            //catch
            .catch(erro => console.log(erro));
    }


    render() {

        return (
            <div>
                <NavegadorAdmin />
                <div className="alterar_categoria">

                    <a id="deslogarButton"href="" onClick={this.deslogar}>deslogar</a>
                    <Divsessao titulo="Lista de Categorias" />
                    <table id="tabela_lista_categoria">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Categiria</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo">
                            {this.state.lista.map(element =>{
                                return(
                                    <tr key={element.idCategoria}>
                                        <td>{element.idCategoria}</td>
                                        <td>{element.nomeCategoria}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                    <div>
                        <Divsessao titulo="Adicionar categoria" />
                        <form className="form_login" id="form_categoria" onSubmit={this.cadastrarCategoria} >


                            
                            <input className="input_form" type="text"  value={this.state.nome}
                            onChange={this.cadastrarNome} placeholder="cadastrar" />


                            <button className="button_form" onClick={this.cadastrarCategoria}> cadastrar</button>


                    
                        </form>


                    </div>
                    <Rodape />
                </div>
            </div>
        );
    }
}
// export default Admin;