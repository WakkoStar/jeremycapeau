import React,{useState, useEffect} from 'react'
import API from "../utils/API";

import { LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import HorizontalScroll from 'react-scroll-horizontal'


const Gallery = (props) => {

  const [rubriques, setRubriques] = useState([])
  const { categorie } = props
  const isMobile = window.screen.availWidth < 500

  useEffect(() => {

    const viewGallery = async() => {
      //get responses
      const res = await API.rubriqueView();
      const gallery = res.data.gallery;

      //filter gallery
      const result = gallery.filter(rubrique => rubrique.category_id === categorie._id)
      setRubriques(result);
    }

    viewGallery();

  },[categorie])




  if(isMobile){
    return (
      <div className="Gallery">
        {
          rubriques.map( (rubrique) => {
            const bIsLink = rubrique.img_data.startsWith("http")
            if(bIsLink){
              return (
                <span>
                  <iframe title={rubrique._id} src={rubrique.img_data} allowfullscreen/>
                </span>
              )
            }else{
              let link = "../../images/" + rubrique.img_data
              let preview = "../../preview/" + rubrique.img_data
              return <LazyLoadImage key={rubrique._id} src={link} placeholderSrc={preview} effect="opacity" />
            }
          })
        }
      </div>
    )
  }else{
    return (
      <div className="Gallery">
        <HorizontalScroll
          reverseScroll = {true}
          style= {{position:'inherit', width: 'auto'}}
        >
        {
          rubriques.map( (rubrique) => {
            let link = "";
            let preview = "";
            const bIsLink = rubrique.img_data.startsWith("http")
            if(bIsLink){
              const videoID = rubrique.img_data.replace("https://www.youtube.com/embed/", "")
              link = "http://i3.ytimg.com/vi/"+ videoID +"/maxresdefault.jpg"
              preview = link
              return(
                <a className='preview' href={rubrique.img_data} target="_blank">
                  <LazyLoadImage key={rubrique._id} src={link} placeholderSrc={preview} effect="opacity" />
                  <div><p>Visionner la vidéo</p></div>
                </a>
              )
            }else{
              link =  "../../images/" + rubrique.img_data
              preview = "../../preview/" + rubrique.img_data
              return <LazyLoadImage key={rubrique._id} src={link} placeholderSrc={preview} effect="opacity" />
            }
          })
        }
        </HorizontalScroll>
      </div>
    )
  }

}

export default Gallery
