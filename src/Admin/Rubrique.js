import React,{useState, useEffect} from 'react'
import API from "../utils/API";
import { useParams } from "react-router-dom";

const Rubrique = () => {
//usestate
const [images, setImages] = useState([]);
const [allImages, setAllimages] = useState([])
const [movedRubrique, setMovedRubriques] = useState({from: "", to:""})
const [rubriques, setRubriques] = useState([]);

//get id of the category passsed by the router dom
let { id } = useParams();
//useffect
useEffect(() =>{
const setRubrique = async() => {

    //get responses
    const res = await API.rubriqueView();
    const gallery = res.data.gallery;
    //filter gallery
    const result = gallery.filter(rubrique => rubrique.category_id === id)
    setRubriques(result);

    //get images
    const res_2 = await API.imagesView();
    const images = res_2.data.images
    setAllimages(images)
    viewImages(result, images);
}
    setRubrique();

},[id])

const viewImages = async(gallery, images) => {
//get img_id of gallery
let gallery_imgs = []
for (var i = 0; i < gallery.length; i++) {
    gallery_imgs[i] = gallery[i].img_id
}

//filter images
const result = images.filter(image => gallery_imgs.includes(image._id) === false)
setImages(result);
}

const addRubrique = (img_id, img_data, index) => {
let res = rubriques
res.push({_id:"", img_id,img_data, category_id: id, index: index})
setRubriques(res)
viewImages(res, allImages)
}

const deleteRubrique = (img_id) => {
const index = rubriques.findIndex(rubrique => rubrique.img_id === img_id)
let res = rubriques
if(index !== -1) res.splice(index, 1) //setRubriques
viewImages(res, allImages)
}

const saveRubrique = async() => {

const res = await API.rubriqueView();
//previous rubrique
const gallery = res.data.gallery.filter(rubrique => rubrique.category_id === id)

for (let i = 0; i < rubriques.length; i++) {
    //All new images saved
    const {_id, img_id, img_data, index} = rubriques[i]

    if(_id == ""){
    await API.rubriqueAdd(id, img_id, index);
    }
}

for (let j = 0; j < gallery.length; j++) {
    //if images doesn't displayed in rubrique
    const index = rubriques.findIndex(rubrique => rubrique.img_id === gallery[j].img_id )
    
    if(index === -1){
    await API.rubriqueDelete(id, gallery[j].img_id);
    }
}

window.location.reload();
}

const isSaved = async () => {
//get responses
const res = await API.rubriqueView();
const gallery = res.data.gallery;
//filter gallery
const result = gallery.filter(rubrique => rubrique.category_id === id)
//if isn't the same array
for (let i = 0; i < result.length; i++) {
    const {_id} = result[i]
    if (_id !== rubriques[i]._id) {
    return false;
    }
}

return true
}

const moveRubrique = async (e, rubrique) => {

e.preventDefault()

//Verify modifications
if (!isSaved){
    alert('Nous enregistrons d\'abord vos modfications')
    saveRubrique()
} 

const props = movedRubrique
if (props.from === "") {
    props.from = rubrique
    setMovedRubriques(props)
} else if (props.to === "") {
    props.to = rubrique
    setMovedRubriques(props)

    API.rubriqueMove({
        from: movedRubrique.from,
        to: movedRubrique.to
    })
    .then(async () => {
        //refresh
        setMovedRubriques({
        from: "",
        to: ""
        })
        //get responses
        const res = await API.rubriqueView();
        const gallery = res.data.gallery;
        //filter gallery
        const result = gallery.filter(rubrique => rubrique.category_id === id)
        setRubriques(result);
    })
    .catch(() => {
        alert('Nous enregistrons d\'abord vos modfications')
        saveRubrique()
    })
}

}

const setPreview = async(rubrique) => {
const category = {
    _id: id,
    preview_id : rubrique.img_data
}
await API.categoryModify(category)
}

const ImageDisplay = (props) => {
    const {img} = props

    return (
        <div>
        <img alt={img.picture_id} src={"../../preview/" + img.picture_id} />
        <div onClick={() => addRubrique(img._id, img.picture_id, img.index)}>
            <img src="../../images/add.png" alt="Ajouter"/>
        </div>
        </div>
    )
}

const RubriqueDisplay = (props) => {
    const {rubrique} = props

    return (
    <div>
        <img alt={rubrique.img_data} src={"../../preview/" + rubrique.img_data}/>
        <div>
        <div onClick={(e) => moveRubrique(e,rubrique)}>
            <img src="../../images/move.png" alt="Deplacer"/>
        </div>
        <div onClick={() => setPreview(rubrique)}>
            <img src="../../images/upload.png" alt="Preview"/>
        </div>
        <div onClick={() => deleteRubrique(rubrique.img_id)}>
            <img src="../../images/bin.png" alt="Supprimer"/>
        </div>
        </div>
    </div>
    )
}

return (
<div className="rubrique">
    <div id="submit" onClick={saveRubrique}><p>Enregistrer</p></div>
    <div id="modify">
    <h1>Modifier</h1>
    {
        rubriques.map( rubrique => {
        return <RubriqueDisplay key={rubrique.img_id} rubrique={rubrique}/>
        })
    }
    </div>
    <div id="add">
    <h1>Ajouter</h1>
    {
        images.map( img => {
        return <ImageDisplay key={img._id} img={img} />
        })
    }
    </div>
</div>
)
}

export default Rubrique;
