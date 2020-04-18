import React,{useState, useEffect} from 'react'
import API from "../utils/API"
import $ from "jquery";

const Pdfs = () => {

  const [pdfs, setPdfs] = useState([]);

  useEffect(() =>{
     viewPdfs();
  },[])

  const viewPdfs = async() => {
    let pdfs = await API.pdfsView();
    setPdfs(pdfs.data.pdfs);
  }

  const deletePdf = async(id) => {
    await API.pdfsDelete(id)
    viewPdfs();
  }

  const disableButtons = () => {
    $("input[type='submit']").prop('disabled', 'true')
  }

  return (
    <div className="body_dashboard">

      <div className="main_dashboard">
      {
        pdfs.map( file => {
          let link = "../../files/" + file.file_id

          return (
            <div className="pdfs" key={file._id}>
              <div style={{backgroundImage: `url(../../images/pdf.png)`}}>
                <div className="select" onClick={() => deletePdf(file._id)}>
                  <img src="../../images/bin.png" alt="Supprimer"/>
                </div>
              </div>
              <a href={link}>{file.nom}</a>
            </div>
          )

        })
      }
      </div>

      <div className="sidebar_dashboard">
        <div>
          <h1>Ajouter un fichier</h1>
          <form onSubmit={disableButtons} action='/api/pdfs/add' method='post' encType="multipart/form-data">
              <label htmlFor="data">Importer un fichier</label>
              <input type="file" id="data" name="data" required/>
              <p>Nom</p>
              <input type="text" name="nom" required/>
              <input type="submit" value='Importer'/>
          </form>
          </div>
      </div>
    </div>
  )
}

export default Pdfs;
