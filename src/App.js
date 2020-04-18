import React from 'react';
import { Route, Switch, BrowserRouter as Router,} from "react-router-dom";
import PrivateRoute from "./Admin/PrivateRoute.js";
import { Dashboard } from "./Admin/index.js";
import Site from "./Site/index.js";
import { Login } from "./Auth/Login.js";
import './App.css'

export default function App() {

    return (
        <div className="App">
            <Router>
              <Switch>
                <Route exact path="" component={Site} />
                <Route path="/user" component={Login} />
                <PrivateRoute component={Dashboard} path="/dashboard"/>
              </Switch>
            </Router>
        </div>
    )
}
