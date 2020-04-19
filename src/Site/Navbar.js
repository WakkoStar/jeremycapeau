import React,{useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import $ from "jquery";
import { CSSTransition } from 'react-transition-group';
import FontFaceObserver from 'fontfaceobserver'
import {isMobile} from "react-device-detect";
const Navbar = (props) => {

  const [display, setDisplay] = useState(true)
  const [fontAvailable, setFontAvailable] = useState(false)

  useEffect(() =>{
    var font = new FontFaceObserver('Oswald', {weight: 400});
    font.load()
    .then(() => {
      setFontAvailable(true)
    }, () => {
      setFontAvailable(false)
    });
    toggleHeight();
  },[])

  if(isMobile){
    //Event listener
    $('li,#home').on('click', function(){
      $('nav').height("10vh")
      $('#links').css("visibility", "hidden")
      $('#menu').attr('src', '../../images/burger.png')
      setDisplay(false)
    });
  }

  const toggleHeight = () => {
    if(isMobile){
      if(display){
        $('nav').height("10vh")
        $('#links').css("visibility", "hidden")
        $('#menu').attr('src', '../../images/burger.png')
      }else{
        $('nav').height("100vh")
        $('#links').css("visibility", "visible")
        $('#menu').attr('src', '../../images/cross.png')
      }
      setDisplay(!display)
    }
  }

  return (
    <nav>

    <CSSTransition
      in={fontAvailable}
      timeout={0}
      onEnter={() =>{$('#logo').css('opacity', 1)}}
    >
      <div id="logo">
        <Link to="./" id="home">
          <h1>JEREMY CAPEAU</h1>
          <p>Vidéaste - Photographe, France: 06.40.49.95.63</p>
        </Link>

        <img id="menu" src="../../images/burger.png" alt="menu" onClick={toggleHeight}/>
      </div>
    </CSSTransition>

    <CSSTransition
      in={display}
      classNames="fade"
      timeout={600}
      enter={true}
      exit={true}
    >
      <div id="links">
        <h2>Travail</h2>
        <ul>
          {
            props.cat.map( categorie => {
              let path = "/" + categorie.nom
              if(categorie.visible){
                return (
                  <li key={categorie._id}>
                    <Link to={path}>{categorie.nom}</Link>
                  </li>
                )
              }

              return true;
            })
          }
        </ul>
        <h2>Sur</h2>
        <ul>
          <li><Link to="/tarifs">Tarifs</Link></li>
          <li><Link to="/a-propos">Bio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </CSSTransition>

    </nav>
  )
}

export default Navbar
