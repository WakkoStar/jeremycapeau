const mongoose = require("mongoose");

const gallerySchema = mongoose.Schema(
  {
    img_id: {
      type: String,
      required: true
    },
    img_data:{
      type: String,
      required: true
    },
    category_id: {
      type: String,
      required: true
    }
  }
);

module.exports = mongoose.model("Gallery",gallerySchema);
