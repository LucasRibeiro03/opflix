import React, { Component } from 'react';
import '../assets/css/App.css';
import Navegador from '../../src/Component/nav'
import Rodape from '../../src/Component/footer'

class lancamento extends Component {

    constructor() {
        super();
        this.state = {
            lista: [],
        }
    }
    componentDidMount() {
        this.listaLancamentos();
    }

    listaLancamentos = () => {
        fetch('http://localhost:5000/api/lancamento')
            .then(response => response.json())
            .then(data => this.setState({ lista: data }));
    }


    render() {
        return (
            <div>
                <Navegador />

                <section className="sessao_lancamentos">


                    {this.state.lista.map((element) => {
                        let vai = "/lancamentos/id/"
                        return (
                            <div className="classefilmes">

                                <div className="filme_box">

                                    <img className="imagemFilme" src={element.imagem} />

                                    
                                </div>
                                <div className="InfoFilme">
                                    <h2>{element.nomeLancamento}</h2>

                                    <h4>{element.sinopse}</h4>
                                    <h4>{element.tipo}</h4>
                                    <h4>{element.duracao}</h4>
                                    <h4>{element.lancamento}</h4>
                                </div>
                            </div>

                        )
                    })}


                </section>
                <Rodape />
            </div>

        );
    }
}

export default lancamento;