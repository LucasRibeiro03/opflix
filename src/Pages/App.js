import React from 'react';
import '../assets/css/App.css';
import Navegador from '../../src/Component/nav'
import Rodape from '../../src/Component/footer'
import DivSessao from '../Component/divsessao';
 
function App() {
return (
<div>
  <Navegador/>
 
  <section className="destaques_div">
      <div className="favorito_box"/>
      <div>
        <h2 id="destaquesH2">Destaques</h2>
        <div className="barrinha_destaques">
          
        </div>
        <h3>miranha no miranha versu</h3>
        <p>vocês precisam assistir</p>
        <p>pq eu quero</p>
      </div>
    </section>
  <section className="sessao_favoritos">
<DivSessao titulo="favoritos" />
  
  <article className="favoritos_article">
  
    <div className="favorito_box" id="box1favorito"/>
  <div className="favorito_box" id="box2favorito"/>
  <div className="favorito_box" id="box3favorito"/>
  <div className="favorito_box" id="box4favorito"/>
  
  </article>

  </section>
  <section className="sessao_favoritos">
  <DivSessao titulo="Filmes" />
  
      <article className="favoritos_article">
    
        <div className="filme_box"id="box1filme"/>
      <div className="filme_box"id="box2filme"/>
      <div className="filme_box" id="box3filme"/>
      <div className="filme_box" id="box4filme"/>

      </article>
      </section>
<Rodape/>
</div>
);
}

export default App;