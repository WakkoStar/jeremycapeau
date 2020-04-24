import React,{useState, useEffect} from 'react'
import API from "../utils/API";
import { LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Contact = () => {

  const [contacts, setContacts] = useState([]);

  useEffect( ()=>{
    viewContact();
  },[])

  const viewContact = async() => {
    const contacts = await API.contactView();
    setContacts(contacts.data.contacts);
  }

  return (
    <div className="Contact">
      {
        contacts.map(
          contact => {
            let link =  "../../logos/" + contact.picture_id
            if(contact.link_id !== ""){
              return (
                <a href={contact.link_id} rel="noopener noreferrer" target="_blank">
                  <LazyLoadImage src={link} effect="opacity"/>
                  <p>{contact.nom}</p>
                </a>
              )
            }else{
              return (
                <a>
                  <LazyLoadImage src={link} effect="opacity"/>
                  <p>{contact.nom}</p>
                </a>
              )
            }
          }
        )
      }
    </div>
  )

}

export default Contact;
