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
      await Category.updateOne(
        {_id: category._id}, 
        {nom : category.nom, visible: category.visible, link: slugify(category.nom),}
        )
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
      'a' : 'á|à|ã|â|À|Á|Ã|Â',
      'e' : 'é|è|ê|É|È|Ê',
      'i' : 'í|ì|î|Í|Ì|Î',
      'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
      'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
      'c' : 'ç|Ç',
      'n' : 'ñ|Ñ',
  };
  
  const regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
  str = str.replace(regex, '');
  str = str.replace(/\s/g, '')
  str = str.replace("/", '')
  str = str.toLowerCase();

  for (var pattern in map) {
      str = str.replace(new RegExp(map[pattern], 'g'), pattern);
  };

  return str;
};