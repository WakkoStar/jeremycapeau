const Contact = require("./schemaContact.js");
const fs = require('fs')

//ADD
const add = async(req, res) => {
  //get files and body of request
  const {logo} = req.files
  const {name, link} = req.body
  if(!logo || !name || !link) return res.sendStatus(400)
  //create object
  const contact = {
    nom : name,
    picture_id: logo.name,
    link_id: link
  }
  //execute response
  try{
    //move file
    logo.mv('public/logos/'+logo.name, function(err) {
      if (err)
        return res.sendStatus(500)
    });
    //save contact
    const contactData = new Contact(contact);
    await contactData.save();
    //redirect user
    return res.redirect("http://localhost:3000/dashboard/contact");
  }catch(e){
    return res.sendStatus(500)
  }

}
///VIEW
const view = async(req, res) => {
  //find contacts
  const contacts = await Contact.find({});
  //execute response
  try{
    //pass contacts in response
    return res.status(200).json({
      contacts : contacts
    })
  }catch(e){
    return res.sendStatus(500)
  }
}
///MODIFY
const modify = async(req, res) => {
  //get request
  const {nom, id, link} = req.body;
  if (!nom || !id || !link) return res.sendStatus(400)
  //execute response
  try {
    //If files is passed in request
    if(req.files){
      const {logo} = req.files;
      //move file
      logo.mv('public/logos/'+logo.name, function(err) {
        if (err)
          return res.sendStatus(500)
      });
      //get previous contact and delete it
      const contactPrevious = await Contact.findOne({_id : id});
      fs.unlinkSync('public/logos/'+contactPrevious.picture_id);
      //update contact
      await Contact.updateOne({_id: id},{nom : nom, picture_id: logo.name, link_id: link });
    //else update only the name
    }else{
      await Contact.updateOne({_id: id},{nom, link_id: link});
    }
    //redirect user
    return res.redirect("http://localhost:3000/dashboard/contact");

  } catch (e) {
    console.log(e);
    return res.sendStatus(500)
  }

}
///DELETE
const deleteC = async(req, res) => {
  //get id of request
  const {id} = req.body;
  if(!id) return res.sendStatus(400)
  //execute response
  try {
    //get previous contact and delete it
    const contactPrevious = await Contact.findOne({_id : id});
    //delete
    fs.unlinkSync('public/logos/'+contactPrevious.picture_id)
    await Contact.deleteOne({_id: id});

    return res.status(200).json({msg: "Contact supprimé > " + contactPrevious.nom})

  } catch (e) {
    console.log(e);
    return res.sendStatus(500)
  }
}

exports.add = add;
exports.view = view;
exports.modify = modify;
exports.delete = deleteC;
