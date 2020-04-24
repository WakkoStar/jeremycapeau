const mongoose = require("mongoose");

const imagesSchema = mongoose.Schema(
  {
    picture_id: {
      type: String,
      unique: true,
      required: true
    },
    index: {
      type: Number,
      required: false,
      index: true,
    }
  }
);

module.exports = mongoose.model("Images",imagesSchema);
