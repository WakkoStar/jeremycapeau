import React,{useState, useEffect} from 'react'
import API from "../utils/API";

import {Link} from "react-router-dom";
import setLink from './Link'

const Category = () => {

  const[categories, setCategories] = useState([]);
  const[nom, setNom] = useState(undefined);
  const [catSelected, setCatSelected] = useState({});
  const [movedCategories, setMovedCategories] = useState({from: "", to: ""})
  useEffect(() => {
    viewCategory();
  },[])

  const addCategory = async() => {
    //check if the nom is passed
    if(!nom){
      alert("Il faut rentrer un nom de categorie")
      return;
    }
    await API.categoryAdd(nom);
    viewCategory();
  }

  const viewCategory = async() => {
    const res = await API.categoryView();
    setCategories(res.data.categories);
  }

  const deleteCategory = async(id) => {
    await API.categoryDelete(id)
    viewCategory();
    setCatSelected({});
  }

  const moveCategory = async(e,category) => {
    e.preventDefault()
    const props = movedCategories

    if(props.from === ""){
      props.from = category
      setMovedCategories(props)
    }else if(props.to === ""){
      props.to = category
      setMovedCategories(props)

      API.categoryModify({from : movedCategories.from, to : movedCategories.to})
      .then(() => {
        //refresh
        setMovedCategories({from: "", to: ""})
        viewCategory();
      })
    }
  }

  const modifyCategory = async() => {
    if(!catSelected){
      alert("Erreur de selection")
      return
    }
    if(catSelected.nom === ""){
      alert("Veuillez entre un nom")
      return
    }
    await API.categoryModify(catSelected)
    viewCategory();
    setCatSelected({});
  }

  return (
    <div className="body_dashboard">

      <div className="main_dashboard">
        {
          categories.map(
            (category) => {
              let link = setLink(category.preview_id)
              return (
                <div key={category._id} className="category">
                  <div style={{backgroundImage: `url(${link})`}}>
                    <div className="select">
                      <Link to={`./rubrique/${category._id}`}>
                        <img src="../../images/add.png" alt="Ajouter"/>
                      </Link>
                      <div className="tiers" onClick={() => setCatSelected(category)}>
                        <img src="../../images/pen.png" alt="Modifier"/>
                      </div>
                      <div className="tiers" onClick={() => deleteCategory(category._id)}>
                        <img src="../../images/bin.png" alt="Supprimer"/>
                      </div>
                      <div className="tiers" onClick={(e) => moveCategory(e, category)}>
                        <img src="../../images/move.png" alt="Ajouter"/>
                      </div>
                    </div>
                  </div>
                  <p>{category.nom} {category.visible? "(visible)" : "(pas visible)"}</p>
                </div>
              )
            }
          )
        }
      </div>

      <div className="sidebar_dashboard">

        <div>
          <h1>Ajouter</h1>
          <p>Nom de la categorie</p>
          <input type="text" onChange={(e) => setNom(e.target.value)} />
          <button onClick={(e) => addCategory()}>Ajouter</button>
        </div>

        <div style={{display: catSelected._id? "flex" : "none"}}>
          <h1>Modifier</h1>
          <p>Nom de la categorie</p>

          <input type="text" value={catSelected.nom} onChange={(e) => {
            const catSelected_instance = {
              _id: catSelected._id,
              nom: e.target.value,
              visible: catSelected.visible
            }
            setCatSelected(catSelected_instance);
          }} />

          <input type="submit" value={catSelected.visible} onClick={(e) =>{
            const catSelected_instance = {
              _id: catSelected._id,
              nom: catSelected.nom,
              visible: e.target.value === "true" ? "false" : "true"
            }
            setCatSelected(catSelected_instance);
          }} />

          <button onClick={(e) => modifyCategory()}>Modifier</button>
        </div>

      </div>
    </div>
  )
}

export default Category;
