import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App';
import * as serviceWorker from './serviceWorker';
import Login from './Pages/Login';
import { Route, Link, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import Admin from './Pages/Adimin';
import lancamentos from './Pages/Lancamentos';
const routing = (

    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/login' component={Login} />
                <Route exact path="/Admin" component={Admin}/>
                <Route exact path="/Lancamentos" component={lancamentos}/>             
                
            </Switch>
        </div>
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
