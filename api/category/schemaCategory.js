const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    nom: {
      type: String,
      required: true
    },
    preview_id: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    },
    index: {
      type: Number,
      required: false,
      index: true,
    }
  }
);

module.exports = mongoose.model("Category", categorySchema);
