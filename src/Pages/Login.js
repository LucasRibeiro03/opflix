import React,{Component} from 'react';
import '../assets/css/App.css';
import Axios from 'axios';
import Navegador from '../../src/Component/nav'
import Rodape from '../../src/Component/footer'
class login extends Component{

    constructor(){
        super();
        this.state ={
            email: "",
            senha: "",
            erro:""
        }
    }

    //mudar estado email
    mudarEstadoEmail = (event) =>{
        this.setState({email: event.target.value})
    }
    //mudar estado senha
    mudarEstadoSenha = (event) => {
        this.setState({senha: event.target.value})
    }
    // efetuar login
    efetuarLogin = (event) =>{
        event.preventDefault();
        Axios.post("http://localhost:5000/api/login",{
            email:this.state.email,
            senha: this.state.senha
        })
        .then(data =>{
            if(data.status === 200){
                localStorage.setItem("chaveOpflix", data.data.token);
                this.props.history.push('/admin')
            }else{
                console.log("Ocorreu um erro durante o processo de Login")

            }
        })
        .catch(erro =>{
            this.setState({erro:"Usuário ou senha inválido"});
            console.log(erro);
        })
    }


    
    render(){
        return(
            <div >
            <Navegador />
            <div id="login_area">
                <h1 id="logo_login">opflix</h1>
                <div className="Area_login">

                    <form className="form_login" onSubmit={this.efetuarLogin}>
                        <h1>Login</h1>
                        <input className="input_form" placeholder="Email" onChange={this.mudarEstadoEmail} value={this.state.email}/>
                        <input className="input_form" placeholder="Senha" onChange={this.mudarEstadoSenha} value={this.state.senha}/>
                        <button className="button_form" >Logar</button>
                    
                        <p 
                                className="text__login"
                                style={{color: "red", textAlign:"center"}}
                            >
                                {this.state.erro}
                            </p>
                    </form>
                    
                </div>
                
            </div>
            
            <Rodape />

        </div>
        )
    }
        
}
export default login;