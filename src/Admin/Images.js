
import React,{useState, useEffect} from 'react'
import axios from "axios";
import API from "../utils/API"
import $ from "jquery";

axios.defaults.withCredentials = true

const Images = () => {

const [images, setImages] = useState([]);
const [countFiles, setCountFiles] = useState(0)
const [file, setFile] = useState([])
const [link, setLink] = useState()
const [load, setLoad] = useState(0)
useEffect(() =>{
    viewImages();
},[])

const viewImages = async() => {
    const res = await API.imagesView();
    setImages(res.data.images);
}

const addImages = async() => {
    upload(file, link)
    viewImages();
    setFile([])
    setCountFiles(0)
}

const upload = (file) => {
    const config = {
        onUploadProgress: function(progressEvent) {
        var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        setLoad(percentCompleted)
        }
    }

    let data = new FormData()
    data.append('link', link)
    for (let i = 0; i < file.length; i++) {
        data.append('datas', file[i])
    } 

    axios.post('/api/images/', data, config)
        .then(res => setLoad(0))
        .catch(err => alert('erreur...'))
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
            <input type="submit" value={load ? load : 'Confirmer'} onClick={addImages}/>
        </div>
    </div>
    </div>
)
}

export default Images;
