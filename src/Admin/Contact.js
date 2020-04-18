import React,{useState, useEffect} from 'react'
import API from "../utils/API"
import $ from "jquery";

const Contact = () => {

  const [contacts, setContacts] = useState([]);
  const [nomSelected, setNomSelected] = useState(undefined);
  const [linkSelected, setLinkSelected] = useState(undefined);
  const [idSelected, setIdSelected] = useState(undefined);

  useEffect( ()=>{
    viewContact();
  },[])

  const viewContact = async() => {
    const contacts = await API.contactView();
    setContacts(contacts.data.contacts);
  }

  const selectContact = (contact) => {
    setLinkSelected(contact.link_id);
    setNomSelected(contact.nom);
    setIdSelected(contact._id);
  }

  const deleteContact = async() => {
    await API.contactDelete(idSelected);
    setIdSelected(undefined)
    viewContact();
  }

  const disableButtons = () => {
    $("input[type='submit']").prop('disabled', 'true')
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
                <a href={contact.link_id}><p>{contact.nom}</p></a>
              </div>
            )

          }
        )
      }
      </div>

      <div className="sidebar_dashboard">
        <div>
          <h1>Ajouter</h1>
          <form onSubmit={disableButtons} action='/api/contact/add' method='post' encType="multipart/form-data">
                <label htmlFor="add_logo">Importer une image</label>
              <input type="file" name="logo" id="add_logo" required/>
              <p>Nom du contact</p>
              <input type="text" name="name" required/>
              <p>Lien </p>
              <input type="text" name="link" required/>
              <input type="submit" value='Importer'/>
          </form>
        </div>

        <div style={{display: idSelected ? "flex": "none"}}>
          <h1>Modifier</h1>
          <form onSubmit={disableButtons} action='/api/contact/modify' method='post' encType="multipart/form-data">
              <label htmlFor="modify_logo">Modifier l'image</label>
              <input type="file" name="logo" id="modify_logo"/>
              <p>Nom du contact</p>
              <input type="text" value={nomSelected} name="nom" onChange={(e) =>setNomSelected(e.target.value)} required/>
              <p>Lien </p>
              <input type="text" value={linkSelected} name="link" onChange={(e) =>setLinkSelected(e.target.value)} required/>
              <input type="hidden" value={idSelected} name="id"/>
              <input type="hidden" value={localStorage.getItem('token')} name="token"/>
              <input type="submit" value='Modifier'/>
          </form>
          <button onClick={() => deleteContact()}>Supprimer</button>
        </div>

      </div>
    </div>
  )
}

export default Contact;
