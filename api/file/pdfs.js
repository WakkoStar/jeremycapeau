const Pdfs = require("./schemaPdfs.js");
const fs = require('fs');

//VIEW
const view = async(req, res) => {
  //find pdf
  const pdfs = await Pdfs.find({});
  //execute response
  try {
    //return pdfs
    return res.status(200).json({
      pdfs: pdfs
    })
  } catch (e) {
    console.log(e)
    return res.sendStatus(500)
  }
}

////ADD
const add = async(req, res) => {
  //get files and body of request
  const {data} = req.files;
  const {nom} = req.body;
  if(!data || !nom){
    return res.sendStatus(400)
  }
  //create object
  const pdf = {
      nom: nom,
      file_id: data.name
  }
  //execute response
  try {
    //move file
    data.mv('public/files/'+data.name, function(err) {
      if (err)
        return res.sendStatus(500)
    });
    //save pdf
    const pdfsData = new Pdfs(pdf);
    await pdfsData.save();
    //redirect user
    return res.sendStatus(200)
  } catch (e) {
    console.log(e)
    return res.sendStatus(500)
  }
}

///DELETE
const deleteC = async(req, res) => {
  //get id of request
  const {id} = req.body
  if(!id){
    return res.sendStatus(400)
  }
  //execute response
  try {
    //get previous pdf file and delete it
    const pdfPrevious = await Pdfs.findOne({_id: id});
    fs.unlink('public/files/'+ pdfPrevious.file_id, (err) => {
      //nothing
    })
    await Pdfs.deleteOne({_id: id})

    return res.status(200).json({msg: pdfPrevious.file_id + " supprimé"})

  } catch (e) {

    console.log(e);
    return res.sendStatus(500)

  }
}


exports.add = add;
exports.view = view;
exports.delete = deleteC;
