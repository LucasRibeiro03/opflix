import React from "react";

import { Link } from "react-router-dom";
function Nav(){
    return(
        <nav>
    <div className="menu_1">
      <h1>Opflix</h1>
    </div>
    <div className="menu_2">
      <ul>
        <li>
          <Link to="/" href="#destaques_div">destaques</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/">filmes</Link>
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

export default Nav;