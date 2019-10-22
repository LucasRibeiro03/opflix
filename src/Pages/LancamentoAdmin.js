import React, { Component } from 'react';
import '../assets/css/App.css';
import NavegadorAdmin from '../Component/navAdmin'
import Rodape from '../Component/footer'
import Divsessao from '../Component/divsessao';


export default class LancamentoAdmin extends Component{

    constructor(){
        super();
        this.state ={
            listaLancamento :[],
            listaCategoria:[],
            titulo:"",
            categoria:"",
            tipo:"",
            duracao:"",
            lancamento:"",
            imagem:"",
            sinopse:"",
            idCategoria:"",
    
        }
    }

    deslogar = () =>{
        localStorage.removeItem("chaveOpflix");
    }


    componentDidMount() {
        this.listarLancamentos();
        this.listaCategorias();
    }


    listarLancamentos = () => {
        fetch('http://localhost:5000/api/lancamento')
        .then(response => response.json())
        .then(data => this.setState({listaLancamento: data}));   
    }

    listaCategorias = () =>  {
        fetch('http://localhost:5000/api/categoria')
        .then(response => response.json())
        .then(data => this.setState({listaCategoria: data}));
    }



    
    cadastrarTitulo = (event) => {
        this.setState({ titulo: event.target.value });
    }
    cadastrarTipo = (event) => {
        this.setState({ tipo: event.target.value });
    }
    cadastrarImagem = (event) => {
        this.setState({ imagem: event.target.value });
    }
    cadastrarSinopse = (event) => {
        this.setState({ sinopse: event.target.value });
    }
    cadastrarCategoria = (event) => {
        this.setState({ categoria: event.target.value });
    }
    cadastrarData = (event) => {
        this.setState({ lancamento: event.target.value });
    }
    cadastrarDuracao = (event) => {
        this.setState({ duracao: event.target.value });
        console.log(this.state);
    }




    cadastrarLancamento = () => {
        // event.preventDefault();
        fetch('http://localhost:5000/api/lancamento', {
            method: "POST",
            body: JSON.stringify({
                nomeLancamento: this.state.titulo,
                categoria: this.state.categoria,
                sinopse: this.state.sinopse,
                tipo: this.state.tipo,
                duracao: this.state.duracao,
                lancamento: this.state.lancamento,
                imagem: this.state.imagem
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => this.listarLancamentos())
            .catch(erro => console.log(erro))
    }
    
    
        
 

    render() {

        return (
            <div>
                <NavegadorAdmin />
                <div className="alterar_categoria">

                    <a id="deslogarButton"href="" onClick={this.deslogar}>deslogar</a>
                    <Divsessao titulo="Lista de Lancamentos" />
                    <table id="tabela_lista_categoria">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Titulo</th>
                                <th>Sinopse</th>
                                <th>Categoria</th>
                                <th>Data</th>
                                <th>Duração</th>
                                <th>Tipo</th>
                                <th>Imagem</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo">
                        {this.state.listaLancamento.map(element => {
                            return (
                                <tr id="tabela-lancamentos">
                                    <td>{element.idLancamento}</td>
                                    <td>{element.nomeLancamento}</td>
                                    <td>{element.sinopse}</td>
                                    <td>{(element.categoriaNavigation == undefined)  ? '':element.categoriaNavigation.nomeCategoria  }</td>
                                    <td>{element.lancamento}</td>
                                    <td>{element.duracao}</td>
                                    <td>{element.tipo}</td>
                                    <td>{element.imagem}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>

                    <div>
                        <Divsessao titulo="Adicionar Lancamento" />
                        <form className="form_login" id="form_categoria" onSubmit={this.cadastrarLancamento} >


                            
                            <input 
                            //titulo
                            className="input_form" 
                            type="text"  
                            value={this.state.titulo}
                            onChange={this.cadastrarTitulo}
                            placeholder="Titulo" />

                            <input
                            //sinopse
                            className="input_form" 
                            type="text"  
                            value={this.state.nome}
                            onChange={this.cadastrarSinopse}
                            placeholder="sinopse"
                            
                            />
                            
                            <input
                            //data
                            className="input_form" 
                            type="text"  
                            value={this.state.nome}
                            onChange={this.cadastrarData}
                            
                            />
                            
                            <select
                            //Categoria
                            className="input_form" 
                            type="text"  
                            value={this.state.categoria}
                            onChange={this.cadastrarCategoria}
                            placeholder="Categoria"
                            >
                                <option disabled selected  value="0">Selecione Uma Categoria</option>
                                {this.state.listaCategoria.map(element => {
                                    return (
                                <option value = {element.idCategoria}>{element.nomeCategoria}</option>
                                    )
                                })}
                                </select>
                            
                            
                            <input
                            
                            className="input_form" 
                            type="text"  
                            value={this.state.duracao}
                            onChange={this.cadastrarDuracao}
                            placeholder="Duração"
                            />
                            <input
                            
                            className="input_form" 
                            type="text"  
                            value={this.state.tipo}
                            onChange={this.cadastrarTipo}
                            placeholder="Tipo"
                            />
                            
                            <input
                            
                            className="input_form" 
                            type="text"  
                            value={this.state.imagem}
                            onChange={this.cadastrarImagem}
                            placeholder="Imagem URL"
                            />
                            
                            


                            <button className="button_form" onClick={this.cadastrarLancamento}> cadastrar</button>


                    
                        </form>


                    </div>
                    <Rodape />
                </div>
            </div>
        );
    }

}