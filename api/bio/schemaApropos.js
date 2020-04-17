const mongoose = require("mongoose");

const aproposSchema = mongoose.Schema({
  texte: {
    type: String,
    required: true
  },
  picture_id: {
    type: String,
    unique:true,
    required: true
  }
})

module.exports = mongoose.model("Apropos", aproposSchema);
