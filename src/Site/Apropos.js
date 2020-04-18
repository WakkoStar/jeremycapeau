import React,{useState, useEffect} from 'react'
import API from "../utils/API";
import { LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Apropos = () => {

  const[data, setData] = useState({})

  useEffect(() => {
    viewApropos();
  },[])


  const viewApropos = async() => {
    const data = await API.aproposView();
    setData(data.data.apropos);
  }

  let link = "../../biopic/" + data.picture_id

  return (
    <div className="Apropos">
      <LazyLoadImage src={link} effect="opacity"/>
        <div className="html" dangerouslySetInnerHTML={{__html: data.texte}}/>
    </div>
  )

}

export default Apropos
