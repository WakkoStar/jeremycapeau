const Apropos = require("./schemaApropos.js")
fs = require('fs');
///VIEW
const view = async(req, res) => {
  //execute response
  try {
   //find data of "a propos"
   const aproposData = await Apropos.findOne({_id: "5e836b90d6a53a1844345288"})
   //return data
   return res.status(200).json({apropos: aproposData})
  } catch (e) {
    return res.sendStatus(500)
  }
}

/////MODIFY
const modify = async(req, res) => {
  //Find texte of request
  const {texte} = req.body;
  if(!texte) return res.sendStatus(400)
  //execute response
  try{
    //if files is passed in request
    if(req.files){
      //get files
      const {picture_id} = req.files;
      //move files
      picture_id.mv('public/biopic/'+picture_id.name, function(err) {
        if (err)
          return res.sendStatus(500)
      });
      //get previous img and delete it
      const aproposPrevious = await Apropos.findOne({_id: "5e836b90d6a53a1844345288"})
      fs.unlinkSync('public/biopic/'+aproposPrevious.picture_id);
      //Update A propos
      await Apropos.updateOne(
        {_id: "5e836b90d6a53a1844345288"},
        {texte, picture_id: picture_id.name}
      )
    //if we don't have a file in request
    }else{
      //Update only the name
      await Apropos.updateOne({_id: "5e836b90d6a53a1844345288"},{texte})
    }
    //redirect user
    return res.redirect("http://jeremycapeau.fr/dashboard/apropos");
  }catch(e){
    return res.sendStatus(500)
  }
}

exports.view = view;
exports.modify = modify;
