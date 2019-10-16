import React, { Component } from 'react';
import '../assets/css/App.css';
import Navegador from '../../src/Component/nav'
import Rodape from '../../src/Component/footer'

class App extends Component {

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

                <section className="sessao_favoritos">


                    {this.state.lista.map((element) => {
                        let vai = "/lancamentos/id/"
                        return (
                            <div className="">

                                <div className="filme_box">

                                    <img className="imagemFilme" src={element.imagem} />

                                    {/* <Route path="/Lancamentos/idLancamento" component={idLancamento} /> */}

                                </div>
                                <div className="InfoFilme">

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

export default App;