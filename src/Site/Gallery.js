import React,{useState, useEffect} from 'react'
import API from "../utils/API";

import { LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import HorizontalScroll from 'react-scroll-horizontal'

import $ from 'jquery'
import setLink from '../utils/Link';

const Gallery = (props) => {

  const [rubriques, setRubriques] = useState([])
  const [isMobile_layout, setIsMobile] = useState(window.screen.availWidth < 500)
  
  const { categorie } = props

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

  $(window).on('resize', () => {
    setIsMobile(window.screen.availWidth < 500)
  })

  const ImageDisplay = (props) => {
    const {rubrique} = props
    let link =  "../../images/" + rubrique.img_data
    let preview = "../../preview/" + rubrique.img_data

    return <LazyLoadImage
      key={rubrique._id}
      src={link}
      placeHoldersrc={preview}
      effect="opacity"
    />
  }

  const VideoDisplay = (props) => {
    const {rubrique} = props
    let link =  "../../images/" + rubrique.img_data
    let preview = "../../preview/" + rubrique.img_data

    return(
      <a
        href={rubrique.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LazyLoadImage
          key={rubrique._id}
          src={link}
          placeHoldersrc={preview}
          effect="opacity"
        />
        <div className="view-video"><p>Visionner la vidéo</p></div>
      </a>
    )
  }

  if(isMobile_layout){
    return (
      <div className="Gallery">
        {
          rubriques.map( (rubrique) => {
            const bIsLink = rubrique.link !== "undefined"
            if(bIsLink){
              return <VideoDisplay rubrique={rubrique} />
            }else{
              return <ImageDisplay rubrique={rubrique} />
            }
          })
        }
      </div>
    )
  }else{
    return (
      <div className="Gallery">
        <HorizontalScroll
          reverseScroll={true}
          style={{overflow: 'scroll'}}
        >
          <span>
            <div style={{width: "23vw", height:"100vh"}}/>
          </span>
          {
            rubriques.map( (rubrique) => {
              const bIsLink = rubrique.link !== "undefined"
              if(bIsLink){
                  return <VideoDisplay rubrique={rubrique} />
              }else{
                  return <ImageDisplay rubrique={rubrique} />
              }
            })
          }
          </HorizontalScroll>
        </div>
    )
  }
}

export default Gallery
