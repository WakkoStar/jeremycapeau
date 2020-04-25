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
    link: slugify(nom),
    preview_id: "preview.png",
    index: await Category.countDocuments({})
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
  const categories = await Category.find({}).sort({index: 'asc'});

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
    await Gallery.deleteMany({category_id: id})
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
    //if we want to update the preview image
    if(category.preview_id){
      await Category.updateOne({_id: category._id}, {preview_id : category.preview_id})
    }
    //if we want to update the name
    if(category.nom){
      await Category.updateOne({_id: category._id}, {nom : category.nom, visible: category.visible})
    }
    //if we want to update the index
    if(category.from){
      await Category.updateOne({_id: category.from._id}, {index : category.to.index})
      await Category.updateOne({_id: category.to._id}, {index : category.from.index})
    }

    return res.status(200).json({
      msg: "Catégorie modifié"
    })

  }catch (e){
    console.log(e)
    return res.sendStatus(500)
  }
}

exports.add = add;
exports.view = view;
exports.delete = deleteC;
exports.modify = modify;

function slugify (str) {
  var map = {
      '-' : ' ',
      '-' : '_',
      'a' : 'á|à|ã|â|À|Á|Ã|Â',
      'e' : 'é|è|ê|É|È|Ê',
      'i' : 'í|ì|î|Í|Ì|Î',
      'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
      'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
      'c' : 'ç|Ç',
      'n' : 'ñ|Ñ'
  };
  
  str = str.toLowerCase();
  
  for (var pattern in map) {
      str = str.replace(new RegExp(map[pattern], 'g'), pattern);
  };

  return str;
};