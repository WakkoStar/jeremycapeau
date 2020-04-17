const Gallery = require("./schemaGallery.js");

////ADD
const add = async(req, res) => {
  //get body of request
  const { img_id, category_id, img_data } = req.body;
  //if img_id and category_id isn't submitted
  if(!img_id || !category_id || !img_data){
    return res.sendStatus(400)
  }
  //create object
  const gallery = {
    img_id,
    img_data,
    category_id
  }
  //execute response
  try {
    //save gallery
    const galleryData = new Gallery(gallery);
    await galleryData.save()
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
  //find galleries
  const gallery = await Gallery.find({});
  //execute response
  try {
    return res.status(200).json({
      gallery: gallery
    })
  } catch (e) {
    return res.sendStatus(500)
  }
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

exports.add = add;
exports.view = view;
exports.delete = deleteC;
