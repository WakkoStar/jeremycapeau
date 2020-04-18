import React,{useState, useEffect} from 'react'
import API from "../utils/API"
import $ from "jquery";
import config from "../config.js"
const Apropos = () => {

  const[data, setData] = useState({})
  const [texte, setTexte] = useState(undefined)

  useEffect(() => {
    viewApropos();
  },[])


  const viewApropos = async() => {
    const data = await API.aproposView();
    setData(data.data.apropos);
    setTexte(data.data.apropos.texte)
  }

  const disableButtons = () => {
    $("input[type='submit']").prop('disabled', 'true')
  }

  let link = "../../biopic/" + data.picture_id

  return (
    <div className="body_dashboard">

      <div className="main_dashboard apropos">
        <div style={{backgroundImage: `url(${link})`}} />
          <div className="html" dangerouslySetInnerHTML={{__html: data.texte}}/>
      </div>

      <div className="sidebar_dashboard">
        <div>
          <form onSubmit={disableButtons} action='/api/apropos/modify' method='post' encType="multipart/form-data">
              <h1>Modifier</h1>
                <label htmlFor="data">Importer un fichier</label>
                <input type="file" id="data" name="picture_id"/>
                <p>Texte</p>
                <textarea type="text" required value={texte} name="texte" onChange={(e) => setTexte(e.target.value)}/>
                <input type="submit" value="Modifier"/>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Apropos;
