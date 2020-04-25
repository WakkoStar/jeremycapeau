import React from 'react'
import {Switch, Route} from "react-router-dom";

import Rubriques from "./Rubriques"
import Gallery from "./Gallery"
import Tarifs from "./Tarifs"
import Apropos from "./Apropos"
import Contact from "./Contact"

const Main = (props) => {

  const categories = props.cat

  return (
     <Switch>
           <Route exact path="/">
             <Rubriques cat={categories}/>
           </Route>
          {
            categories.map((categorie) => {
              let path = "/" + categorie.link
              return(
                <Route path={path} key={categorie._id}>
                    <Gallery categorie={categorie}/>
                </Route>
              )
            })
          }
          <Route path="/brochures">
            <Tarifs />
          </Route>
          <Route path="/a-propos">
            <Apropos />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
     </Switch>
  )
}

export default Main
