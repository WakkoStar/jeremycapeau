const mongoose = require("mongoose");

const pdfsSchema = mongoose.Schema(
  {
    file_id: {
      type: String,
      required: true
    },
    nom: {
      type: String,
      required: true
    }
  }
);

module.exports = mongoose.model("Pdfs",pdfsSchema);
