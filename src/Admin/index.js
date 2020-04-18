import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch} from "react-router-dom";

import "./styles/dashboard.sass"

import API from "../utils/API";
import Category from './Category'
import Images from './Images'
import Contact from './Contact'
import Pdfs from './Pdfs'
import Apropos from './Apropos'
import Rubrique from './Rubrique'

export function Dashboard() {

    const disconnect = async() => {
        await API.logout();
        window.location = "/";
    };
    let { path, url } = useRouteMatch();

      return (
          <Router>
          <Switch>
            <div className="dashboard">
                <div id="nav-dashboard">
                  <ul>
                    <li><a href="http://jeremycapeau.fr">Le site</a></li>
                    <li><Link to={`${url}/categories`}>Categories</Link></li>
                    <li><Link to={`${url}/images`}>Images</Link></li>
                    <li><Link to={`${url}/contact`}>Contact</Link></li>
                    <li><Link to={`${url}/fichiers`}>Fichiers</Link></li>
                    <li><Link to={`${url}/apropos`}>A propos</Link></li>
                    <li>
                      <button onClick={disconnect}>
                          DISCONNECT
                      </button>
                    </li>
                  </ul>
                </div>
                <div id="content-dashboard">
                  <Route exact path={`${path}/categories`}>
                    <Category />
                  </Route>
                  <Route exact path={`${path}/images`}>
                    <Images />
                  </Route>
                  <Route exact path={`${path}/contact`}>
                    <Contact />
                  </Route>
                  <Route exact path={`${path}/fichiers`}>
                    <Pdfs/>
                  </Route>
                  <Route exact path={`${path}/apropos`}>
                    <Apropos/>
                  </Route>
                  <Route exact path={`${path}/rubrique/:id`}>
                    <Rubrique/>
                  </Route>
                </div>
            </div>
          </Switch>
          </Router>
        );
}
