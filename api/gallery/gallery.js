const Gallery = require("./schemaGallery.js");
const Images = require("../image/schemaImages.js")
////ADD
const add = async(req, res) => {
  //get body of request
  const { img_id, category_id, index } = req.body;
  //if img_id and category_id isn't submitted
  if(!img_id || !category_id){
    return res.sendStatus(400)
  }
  //create object
  const gallery = {
    img_id,
    category_id,
    index
  }
  //execute response
  try {
    const image = await Gallery.findOne({img_id, category_id})
    if(!image){
      //save gallery
      const galleryData = new Gallery(gallery);
      await galleryData.save()
    }
    return res.status(200).json({
      msg: "Image transféré"
    })
  } catch (e) {
    console.log(e)
    return res.sendStatus(500)
  }
}
////VIEW
const view = async(req, res) => {
  let gallery = [];
  //find galleries
  Gallery.find({}).sort({index: 'desc'})
  .then(async(result) => {
    for (let index = 0; index < result.length; index++) {
      //get each image of the rubrique
      const el = result[index] 
      const img = await Images.findOne({_id: el.img_id })
      //set gallery
      gallery[index] = {
        _id: el._id,
        img_id: el.img_id,
        img_data: img.picture_id,
        link: img.link,
        category_id: el.category_id,
        index: el.index
      } 
    }
    return res.status(200).json({
      gallery: gallery
    })
  })
  .catch((e) => {
    console.log(e)
    return res.sendStatus(500)
  })
}

//DELETE
const deleteC = async(req, res) => {
  //get request body
  const { img_id, category_id } = req.body;
  if(!img_id || !category_id) return res.sendStatus(400)
  //execute response
  try {
    //delete
    await Gallery.deleteOne({img_id : img_id, category_id : category_id })
    return res.status(200).json({
      msg: "image supprimé"
    })
  } catch (e) {
    console.log(e)
    return res.sendStatus(500)
  }
}

const move = async(req, res) => {
  const {rubrique} = req.body
  try {
    await Gallery.updateOne({_id: rubrique.from._id}, {index : rubrique.to.index})
    await Gallery.updateOne({_id: rubrique.to._id}, {index : rubrique.from.index})
    return res.sendStatus(200)
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

exports.add = add;
exports.view = view;
exports.delete = deleteC;
exports.move = move