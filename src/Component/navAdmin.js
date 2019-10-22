import React from "react";

import { Link } from "react-router-dom";
function NavAdmin(){
    return(
        <nav>
    <div className="menu_1">
      <h1>Opflix</h1>
    </div>
    <div className="menu_2">
      <ul>
        <li>
          <Link to="/Admin" href="#sessao_favoritos">Alterar Categorias</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/AdminLancamento">Alterar Lancamento</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/login">login</Link>

        </li>
      </ul>


    </div>

  </nav>
    );
}

export default NavAdmin;