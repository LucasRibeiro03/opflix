import React, { Component } from 'react';
import '../assets/css/App.css';
import Navegador from '../../src/Component/nav'
import Rodape from '../../src/Component/footer'
import DivSessao from '../Component/divsessao';

class App extends Component {

  constructor(){
    super();
    this.state = {
      lista: [],
      itemBuscado:{}
    }
  }
  componentDidMount(){
    this.listaLancamentos();
  }

  listaLancamentos = () =>{
    fetch('http://localhost:5000/api/lancamento')
    .then(response => response.json())
    .then(data => this.setState({lista:data}));
  }
  
  BuscarPorId = (event) =>{
    event.preventDefault();
    this.props.history.push("/lancamentos");
  }



  render() {
    return (
      <div>
        <Navegador />

        <section className="destaques_div">
          <div className="favorito_box" />
          <div>
            <h2 id="destaquesH2">Destaques</h2>
            <div className="barrinha_destaques">

            </div>
            <h3>miranha no miranha versu</h3>
            <p>vocês precisam assistir</p>
            <p>pq eu quero</p>
          </div>
          {/* {this.state.BuscarItem.map((element)=>{
            return(
              <div className="favorito_box" />
          <div>
            <h2 id="destaquesH2">Destaques</h2>
            <div className="barrinha_destaques">

            </div>
            <h3>{element.nomeLancamento}</h3>
            <p>{element.sinopse}</p>
            <p>pq eu quero</p>
          </div>
            )
          })} */}
        </section>
        <section className="sessao_favoritos">
          <DivSessao titulo="Filmes" />

          <article className="favoritos_article" >
          
          {this.state.lista.map((element) =>{
          let vai = "/lancamentos/id/"
            return(
              <div className="filme_box">
                
                <img className="imagemFilme" src={element.imagem} />
                
                {/* <Route path="/Lancamentos/idLancamento" component={idLancamento} /> */}
                <button onClick={this.BuscarPorId} >{element.nomeLancamento}</button>
              </div>
            )
          })}
          

          </article>
        </section>
        <Rodape />
      </div>
    
    );
  }
}

export default App;