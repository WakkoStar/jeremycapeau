import React,{useState, useEffect} from 'react'
import API from "../utils/API";
import { useParams } from "react-router-dom";
import setLink from './Link'

const Rubrique = () => {
  //usestate
  const [images, setImages] = useState([]);
  const [allImages, setAllimages] = useState([])

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

  const addRubrique = (img_id, img_data) => {
    let res = rubriques
    res.push({_id:"", img_id,img_data, category_id: id})
    setRubriques(res)
    viewImages(res, images)
  }

  const deleteRubrique = (img_id) => {
    const index = rubriques.findIndex(rubrique => rubrique.img_id === img_id)
    let res = rubriques
    if(index !== -1) res.splice(index, 1)
    viewImages(res, allImages)
  }

  const saveRubrique = async() => {

    const res = await API.rubriqueView();
    const gallery = res.data.gallery.filter(rubrique => rubrique.category_id === id)

    console.log(gallery)
    console.log(rubriques)
    for (var i = 0; i < rubriques.length; i++) {
      const {_id, img_id, img_data} = rubriques[i]

      if(_id == ""){
        await API.rubriqueAdd(id, img_id, img_data);
      }
    }

    for (var j = 0; j < gallery.length; j++) {
      const index = rubriques.findIndex(rubrique => rubrique.img_id === gallery[j].img_id )

      if(index === -1){
        await API.rubriqueDelete(id, gallery[j].img_id);
      }
    }

    window.location.reload();
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
      let link = setLink(img.picture_id)

      return (
          <div>
            <img alt={img.picture_id} src={link}/>
            <div onClick={() => addRubrique(img._id, img.picture_id)}>
              <img src="../../images/add.png" alt="Ajouter"/>
            </div>
          </div>
      )
  }

  const RubriqueDisplay = (props) => {
      const {rubrique} = props
      let link = setLink(rubrique.img_data)

      return (
        <div>
          <img alt={rubrique.img_data} src={link}/>
          <div>
            <div onClick={() => deleteRubrique(rubrique.img_id)}>
              <img src="../../images/bin.png" alt="Supprimer"/>
            </div>
            <div onClick={() => setPreview(rubrique)}>
              <img src="../../images/upload.png" alt="Preview"/>
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
