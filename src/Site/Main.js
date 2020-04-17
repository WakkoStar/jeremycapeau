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
      {
        categories.map((categorie) => {
          let path = "/" + categorie.nom
          return(
            <Route exact path={path} key={categorie._id}>
                <Gallery categorie={categorie}/>
            </Route>
          )
        })
      }
      <Route exact path="/">
        <Rubriques cat={categories}/>
      </Route>
      <Route exact path="/tarifs">
        <Tarifs />
      </Route>
      <Route exact path="/a-propos">
        <Apropos />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
  )
}

export default Main
