import React,{useState, useEffect} from 'react'
import API from "../utils/API";
import { LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Tarifs = () => {

  const [pdfs, setPdfs] = useState([]);

  useEffect(() =>{
     viewPdfs();
  },[])

  const viewPdfs = async() => {
    let pdfs = await API.pdfsView();
    setPdfs(pdfs.data.pdfs);
  }

  return(
    <div className="Tarifs">
    <p>
      Grilles tarifaires et conditions
      (sujette à modification dans le temps
      et/ou selon les demandes des clients) :
    </p>
    {
      pdfs.map( (file) => {
        let link =  "../../files/" + file.file_id

        return (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <LazyLoadImage src="../../images/pdf.png" effect="opacity"/>
            <p>{file.nom}</p>
          </a>
        )
      })
    }
    </div>
  )
}

export default Tarifs;
