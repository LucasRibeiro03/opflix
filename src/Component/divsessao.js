import React from "react";

function divsessao(props ) {
    return (  
    <div className="sessao_div">
    <div className="div_barrinha"></div>
    <div>
      <h2>{props.titulo}</h2>
    </div>
    <div className="div_barrinha"></div>
  </div>

    );
}

export default divsessao;