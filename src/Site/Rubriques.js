import React from 'react'
import {Link} from "react-router-dom";
import $ from "jquery";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';


const Rubriques = (props) => {
  return (
    <div className="main_rubriques">
      {
        props.cat.map( (categorie, index) => {

          let link =  '../../preview/' + categorie.preview_id
          let path = "/" + categorie.nom
          if(categorie.visible){
            return(
                <Link to={path} id={index}>
                    <LazyLoadImage src={link} effect="opacity" afterLoad={() => { $("#" + index).css('opacity', '1') }}/>
                    <p>{categorie.nom}</p>
                </Link>
            );
          }else{
            return true;
          }
        })

      }
    </div>
  )

}

export default Rubriques
