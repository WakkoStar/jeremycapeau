const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
  {
    nom  :{
      type: String,
      required: true
    },
    picture_id:{
      type: String,
      unique: true,
      required: true
    },
    link_id:{
      type: String,
      unique: true,
      required: true
    }
  }
);

module.exports = mongoose.model("Contact", contactSchema);
