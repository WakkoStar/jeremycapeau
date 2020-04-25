import React,{useState, useEffect} from 'react'
import API from "../utils/API"
import $ from "jquery";

const Contact = () => {

const [contacts, setContacts] = useState([]);
const [contactModified, setContactModified] = useState({});
const [contactAdded, setContactAdded] = useState({});
const [newFile, setNewFile] = useState(undefined);
const [modifiedFile, setModifiedFile] = useState(undefined);

useEffect( ()=>{
    viewContact();
},[])

const viewContact = async() => {
    const contacts = await API.contactView();
    setContacts(contacts.data.contacts);
}

const selectContact = (contact) => {
    setContactModified({
        id: contact._id,
        nom: contact.nom,
        link: contact.link_id
    })
}

const addContact = async() => {
    const contact = new FormData()
    contact.append('logo', newFile)
    contact.append('link', contactAdded.link)
    contact.append('name', contactAdded.nom)
    await API.contactAdd(contact)
    setContactAdded({})
    viewContact()
}

const modifyContact = async() => {
    const contact = new FormData()
    contact.append('id', contactModified.id)
    contact.append('logo', modifiedFile)
    contact.append('link', contactModified.link)
    contact.append('nom', contactModified.nom)

    await API.contactModify(contact)
    setContactModified({})
    viewContact()
}

const deleteContact = async() => {
    await API.contactDelete(contactModified.id);
    setContactModified({})
    viewContact();
}
return (
    <div className="body_dashboard">

        <div className="main_dashboard">
        {
            contacts.map(
            contact => {
                let link = "../../logos/" + contact.picture_id

                return (
                <div key={contact._id} className="contact" onClick={() => selectContact(contact)}>
                    <div style={{backgroundImage: `url(${link})`}}>
                    <div className="select">
                        <img src="../../images/pen.png" alt="Modifier"/>
                    </div>
                    </div>
                    <a href={contact.link_id} target='_blank' rel="noopener noreferrer"><p>{contact.nom}</p></a>
                </div>
                )

            }
            )
        }
        </div>

        <div className="sidebar_dashboard">
            <div>
                <h1>Ajouter</h1>
                <label htmlFor="add_logo">Importer une image</label>
                <input 
                    type="file" 
                    name="logo" 
                    id="add_logo" 
                    required
                    onChange={(e) => setNewFile(e.target.files[0])}
                />

                <p>Nom du contact</p>
                <input  
                    type="text" 
                    name="name" 
                    required  
                    onChange={e => {
                        const val = e.target.value;
                        setContactAdded(prevState => {
                            return { ...prevState, nom: val }
                        });
                    }}
                />
                <p>Lien </p>
                <input 
                    type="text" 
                    name="link"
                    onChange={e => {
                        const val = e.target.value;
                        setContactAdded(prevState => {
                            return { ...prevState, link: val }
                        });
                    }}
                />
                <input type="submit" value='Importer' onClick={addContact}/>
            </div>

            <div style={{display: contactModified.id ? "flex": "none"}}>
                <h1>Modifier</h1>
                <label htmlFor="modify_logo">Modifier l'image</label>
                <input 
                    type="file" 
                    name="logo" 
                    id="modify_logo" 
                    onChange={(e) => setModifiedFile(e.target.files[0])}
                />

                <p>Nom du contact</p>
                <input 
                    type="text"
                    value={contactModified.nom} 
                    name="nom" 
                    onChange={e => {
                        const val = e.target.value;
                        setContactModified(prevState => {
                            return { ...prevState, nom: val }
                        });
                    }}
                    required
                />

                <p>Lien </p>
                <input 
                    type="text" 
                    value={contactModified.link} 
                    name="link" 
                    onChange={e => {
                        const val = e.target.value;
                        setContactModified(prevState => {
                            return { ...prevState, link: val }
                        });
                    }}
                />
                <input type="submit" value='Modifier' onClick={modifyContact}/>
                <button onClick={() => deleteContact()}>Supprimer</button>
            </div>

        </div>
    </div>
)
}

export default Contact;
