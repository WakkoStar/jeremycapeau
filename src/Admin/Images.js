import React,{useState, useEffect} from 'react'
import API from "../utils/API"
import setLink from './Link'
import $ from "jquery";
import base64Img from 'base64-img'
const Images = () => {

  const [images, setImages] = useState([]);
  const [countFiles, setCountFiles] = useState(0)

  useEffect(() =>{
    viewImages();
  },[])
  const viewImages = async() => {
    const res = await API.imagesView();
    setImages(res.data.images);
  }

  const deleteImages = async(id) => {
    await API.imagesDelete(id);
    viewImages();
  }

  const ImageDisplay = (props) => {
      const {img} = props
      let link = setLink(img.picture_id)
      return (
          <div key={img._id} className="images">
            <img alt={img.picture_id} src={link}/>
            <div className="select" onClick={() => deleteImages(img._id)}>
              <img src="../../images/bin.png" alt="Supprimer"/>
            </div>
          </div>
      )
  }

  const displayFiles = () => {
    const fichierSelectionne = $('#datas').get(0).files
    setCountFiles(fichierSelectionne.length);
  }

  const disableButtons = () => {
    $("input[type='submit']").prop('disabled', 'true')
  }

  return (
    <div className="body_dashboard">
      <div className="main_dashboard" id="images" style={{width: "70%"}}>
      {
        images.map((img, index) => {
          return <ImageDisplay key={img._id} img={img} index={index}/>
        })
      }
      </div>
      <div className="sidebar_dashboard">
        <div>
          <h1>Ajouter</h1>
          <form onSubmit={disableButtons} action='/api/images/add' method='post' encType="multipart/form-data">
              <label htmlFor="datas">{countFiles} fichier(s) selectionné(s)</label>
              <input type="file" id="datas" name="datas" multiple required onChange={displayFiles}/>
              <input type="submit" value='Confirmer'/>
          </form>
        </div>
        <div>
          <h1>Ajouter vidéo</h1>
          <form onSubmit={disableButtons} action='/api/images/add' method='post' encType="multipart/form-data">
              <p>Lien vidéo</p>
              <input type="text" id="data" name="data" required/>
              <input type="submit" value='Confirmer'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Images;
