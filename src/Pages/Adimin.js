import React from 'react';
import '../assets/css/App.css';
import NavegadorAdmin from '../../src/Component/navAdmin'
import Rodape from '../../src/Component/footer'
import Divsessao from '../Component/divsessao';
function login() {
    return (
        <div>
            <NavegadorAdmin />
            <div className="alterar_categoria">

                <Divsessao titulo="Lista de Categorias" />
                <table id="tabela_lista_categoria">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Categiria</th>

                        </tr>
                    </thead>

                    <tbody id="tabela-lista-corpo"></tbody>
                </table>
                
                <div>
                    <Divsessao titulo="Adicionar categoria"/>
                        <form className="form_login" id="form_categoria"action="" >
                            <input   className="input_form" type="text"  placeholder="cadastrar" />
                            <button className="button_form" > cadastrar</button>


                        </form>


                </div>
                <Rodape />
            </div>
        </div>
    );
}

export default login;