import React,{useState, useEffect} from 'react'
import API from "../utils/API"
import $ from "jquery";

const Pdfs = () => {

  const [pdfs, setPdfs] = useState([]);
  const [file, setFile] = useState()
  const [nom, setNom] = useState()

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

  const addPdf = async() => {
    const pdf = new FormData()
    pdf.append('data', file)
    pdf.append('nom', nom)

    await API.pdfsAdd(pdf)
    viewPdfs()
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
              <a href={link} target="_blank" rel="noopener noreferrer">{file.nom}</a>
            </div>
          )

        })
      }
      </div>

      <div className="sidebar_dashboard">
        <div>
          <h1>Ajouter un fichier</h1>
              <label htmlFor="data">Importer un fichier</label>
              <input type="file" id="data" name="data" required onChange={(e) => setFile(e.target.files[0])}/>
              <p>Nom</p>
              <input type="text" name="nom" required onChange={(e) => setNom(e.target.value)}/>
              <input type="submit" value='Importer' onClick={addPdf}/>
          </div>
      </div>
    </div>
  )
}

export default Pdfs;
