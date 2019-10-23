import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App';
import * as serviceWorker from './serviceWorker';
import Login from './Pages/Login';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Admin from './Pages/Admin';
import NaoEncontrado from './Pages/NaoEncontrado'
import lancamento from './Pages/Lancamentos';
import lancamentoAdm from './Pages/LancamentoAdmin';
import {parseJwt} from '../src/Services/auth'


const RotaAdm = ({ component: Component }) => (

    <Route

        render={props =>
            localStorage.getItem("chaveOpflix") !== null && parseJwt().Permissao === "ADMINISTRADOR" ?
                (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                )

        }

    />
)
const COMUM = ({ component: Component }) => (

    <Route

        render={props =>
            localStorage.getItem("chaveOpflix") !== null ?
                (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                )

        }

    />
)


const routing = (


    <Router>
        <div>
            <Switch>
                <COMUM exact path='/' component={App} />
                <Route path='/login' component={Login} />
                <RotaAdm path="/admin" component={Admin} />
                <Route path="/Lancamentos" component={lancamento} />
                <RotaAdm path="/AdminLancamento" component={lancamentoAdm}/>
                <Route component={NaoEncontrado}/>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
