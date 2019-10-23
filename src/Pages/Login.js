import React, { Component } from 'react';
import '../assets/css/App.css';
import Axios from 'axios';
import Navegador from '../../src/Component/nav'
import Rodape from '../../src/Component/footer'
import Divsessao from '../../src/Component/divsessao'
import { parseJwt } from '../Services/auth'
class login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            senha: "",
            emailCadastrar: "",
            NomeUsuario: "",
            senhaCadastrar: "",
            
            erro: "",
        }
    }

    //mudar estado email
    mudarEstadoEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    //mudar estado senha
    mudarEstadoSenha = (event) => {
        this.setState({ senha: event.target.value })
    }
    //cadastrar
    CriarEstadoNome = (event) => {
        this.setState({ NomeUsuario: event.target.value })
    }
    CriarEstadoEmail = (event) => {
        this.setState({ emailCadastrar: event.target.value })
    }
    CriarEstadoSenha = (event) => {
        this.setState({ senhaCadastrar: event.target.value })
    }    

    listarUsuario = () => {
        fetch('http://localhost:5000/api/Usuario')
        .then(response => response.json())
        .then(data => this.setState({listarUsuario: data}));   
    }

    //cadastrarUsuario

    CadastrarUsuario = () => {
        // event.preventDefault();
        fetch('http://localhost:5000/api/Usuario', {
            method: "POST",
            body: JSON.stringify({

                email: this.state.emailCadastrar,
                nomeUsuario: this.state.NomeUsuario,
                senha:this.state.senhaCadastrar,
                permissao: "COMUM"
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => this.listarUsuario())
            .catch(erro => console.log(erro))
    }





    // efetuar login
    efetuarLogin = (event) => {
        event.preventDefault();
        Axios.post("http://localhost:5000/api/login", {
            email: this.state.email,
            senha: this.state.senha
        })
            .then(data => {
                if (data.status === 200) {
                    localStorage.setItem("chaveOpflix", data.data.token);
                    if( parseJwt().Permissao === "ADMINISTRADOR"){
                        
                        this.props.history.push('/admin')
                    }else{
                        this.props.history.push('/')
                    }
                } else {
                    console.log("Ocorreu um erro durante o processo de Login")

                }
            })
            .catch(erro => {
                this.setState({ erro: "Usuário ou senha inválido" });
                console.log(erro);
            })
    }



    render() {
        return (
            <div >
                <Navegador />
                <div id="login_area">
                    <h1 id="logo_login">opflix</h1>
                    <div className="Area_login">

                        <form className="form_login" onSubmit={this.efetuarLogin}>
                            <h1>Login</h1>
                            <input className="input_form" placeholder="Email" onChange={this.mudarEstadoEmail} value={this.state.email} />
                            <input className="input_form" placeholder="Senha" onChange={this.mudarEstadoSenha} value={this.state.senha} />
                            <button className="button_form" >Logar</button>

                            <p
                                className="text__login"
                                style={{ color: "red", textAlign: "center" }}
                            >
                                {this.state.erro}
                            </p>
                        </form>

                    </div>

                </div>
                <Divsessao titulo="cadastrar Usuário" />
                <form className="form_cadastrar" onSubmit={this.CadastrarUsuario}>
                    <h1>Cadastrar</h1>
                    <input className="input_form" placeholder="Insira o seu nome" onChange={this.CriarEstadoNome} value={this.state.NomeUsuario} />
                    <input className="input_form" placeholder="Insira o seu email" onChange={this.CriarEstadoEmail} value={this.state.emailCadastrar} />
                    <input className="input_form" placeholder="Insira sua senha" onChange={this.CriarEstadoSenha} value={this.state.senhaCadastrar} />
                    <button className="button_form" >Cadastrar</button>

                    
                </form>

                <Rodape />
            </div>
        )
    }

}
export default login;