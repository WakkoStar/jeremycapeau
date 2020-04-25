import React,{useState, useEffect} from 'react'
import API from "../utils/API"
import setLink from '../utils/Link'
import $ from "jquery";
const Images = () => {

const [images, setImages] = useState([]);
const [countFiles, setCountFiles] = useState(0)
const [file, setFile] = useState([])
const [link, setLink] = useState()

useEffect(() =>{
    viewImages();
},[])

const viewImages = async() => {
    const res = await API.imagesView();
    setImages(res.data.images);
}

const addImages = async() => {
    const images = new FormData()
    for (let i = 0; i < file.length; i++) {
        images.append('datas', file[i])
    }
    images.append('link', link)
    await API.imagesAdd(images);
    viewImages();
    setFile([])
    setCountFiles(0)
}

const deleteImages = async(id) => {
    await API.imagesDelete(id);
    viewImages();
}

const ImageDisplay = (props) => {
    const {img} = props
    if(!img.link.startsWith('http')){
        return (
            <div key={img._id} className="images">
                <img alt={img.picture_id} src={"../../preview/" + img.picture_id}/>
                <div className="select" onClick={() => deleteImages(img._id)}>
                    <img src="../../images/bin.png" alt="Supprimer"/>
                </div>
            </div>
        )
    }else{
        return (
            <div key={img._id} className="images">
                <img alt={img.picture_id} src={"../../preview/" + img.picture_id}/>
                <div className="select">
                    <img src="../../images/bin.png" alt="Supprimer" onClick={() => deleteImages(img._id)}/>
                    <a href={img.link} target="_blank" rel="noopener noreferrer">Lien vidéo</a>
                </div>
            </div>
        )
    }
}

const setFiles = (e) => {
    const fichierSelectionne = $('#datas').get(0).files
    setCountFiles(fichierSelectionne.length);
    setFile(e.target.files)
}

const disableButtons = () => {
    $("input[type='submit']").prop('disabled', 'true')
}

return (
    <div className="body_dashboard">
    <div className="main_dashboard" id="images">
    {
        images.map((img, index) => {
            return <ImageDisplay key={img._id} img={img} index={index}/>
        })
    }
    </div>
    <div className="sidebar_dashboard">
        <div>
        <h1>Ajouter</h1>
            <label htmlFor="datas">{countFiles} fichier(s) selectionné(s)</label>
            <input type="file" id="datas" name="data" multiple required onChange={(e) => setFiles(e)}/>
            
            <p>Lien vidéo</p>
            <input type="text" name="link" onChange={(e) => setLink(e.target.value)}/>
            <input type="submit" value='Confirmer' onClick={addImages}/>
        </div>
    </div>
    </div>
)
}

export default Images;
