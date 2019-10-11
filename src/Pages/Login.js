import React from 'react';
import '../assets/css/App.css';
import Navegador from '../../src/Component/nav'
import Rodape from '../../src/Component/footer'
function login() {
    return (
        <div >
            <Navegador />
            <div id="login_area">
                <h1 id="logo_login">opflix</h1>
                <div className="Area_login">

                    <form className="form_login">
                        <p>Login</p>
                        <input className="input_form" placeholder="Email" />
                        <input className="input_form" placeholder="Senha" />
                        <button className="button_form" >Logar</button>
                    </form>
                    
                </div>
                
            </div>
            
            <Rodape />

        </div>
    );
}

export default login;