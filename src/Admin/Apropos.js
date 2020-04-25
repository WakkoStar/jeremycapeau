import React,{useState, useEffect} from 'react'
import API from "../utils/API"
import $ from "jquery";
const Apropos = () => {

    const[data, setData] = useState({})
    const [texte, setTexte] = useState(undefined)
    const [selectedFile, setSelectedFile] = useState(undefined)

    useEffect(() => {
    viewApropos();
    },[])

    const setFile = (e) => {
        setSelectedFile(e.target.files[0])
    }

    const viewApropos = async() => {
        const res = await API.aproposView();
        setData(res.data.apropos);
        setTexte(res.data.apropos.texte)
    }
    const modifyApropos = async() => {
        const apropos = new FormData()
        apropos.append('picture_id', selectedFile)
        apropos.append('texte', texte)
        await API.aproposModify(apropos)
        setSelectedFile()
        viewApropos();

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
                <div className="form">
                    <h1>Modifier</h1>
                    <label htmlFor="data">Importer un fichier</label>
                    <input 
                        type="file" 
                        id="data" 
                        name="picture_id" 
                        onChange={(e) => setFile(e)}
                    />
                    <p>Texte</p>
                    <textarea 
                        type="text" 
                        required value={texte} 
                        name="texte" 
                        onChange={(e) => setTexte(e.target.value)}
                    />
                    <input type="submit" value="Modifier" onClick={modifyApropos}/>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Apropos;
