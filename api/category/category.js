const Category = require("./schemaCategory.js");
const Gallery = require("../gallery/schemaGallery.js");
/////ADD
const add = async(req, res) => {
  //get nom of request
  const { nom } = req.body;

  //if nom is submitted = erro
  if(!nom){
    return res.sendStatus(400)
  }

  //Create object of a category
  const category = {
    nom: nom,
    visible: true,
    preview_id: "preview.png"
  }

  //execute response
  try {
    //save category in db
    const categoryData = new Category(category);
    await categoryData.save()

    return res.status(200).json({
      msg : nom + "ajouté"
    })
  } catch (e) {
    console.log(e)
    return res.sendStatus(500)
  }
}

///VIEW
const view = async(req, res) => {
  //find categories
  const categories = await Category.find({});

  //execute response
  try {
    // pass categories
    return res.status(200).json({
      categories: categories
    })
  } catch (e) {
    console.log(e)
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
    //delete category
    await Category.deleteOne({_id : id})
    await Gallery.deleteOne({category_id: id})
    return res.status(200).json({
      msg: id + " > Catégorie supprimé"
    })

  } catch (e) {
    return res.sendStatus(500)
  }
}

///MODIFY
const modify = async(req, res) => {
  //find category in request
  const {category} = req.body;
  if (!category) return res.sendStatus(400)
  //Execute response
  try{
    let msgDetails = "";
    //if we want to update the preview image
    if(category.preview_id){
      await Category.updateOne({_id: category._id}, {preview_id : category.preview_id})
      msgDetails = "" + category.preview_id;
    }
    //if we want to update the name
    if(category.nom){
      await Category.updateOne({_id: category._id}, {nom : category.nom, visible: category.visible})
      msgDetails = "" + category.nom;
    }

    return res.status(200).json({
      msg: "Catégorie modifié :" + msgDetails
    })

  }catch (e){
    return res.sendStatus(500)
  }
}
exports.add = add;
exports.view = view;
exports.delete = deleteC;
exports.modify = modify;
