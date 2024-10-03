const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    //khai bao cac truong va kieu du lieu o trong bang product
    title: { type: String, require: true },
    price: { type: Number, require: true },
    image: { type: String, require: true },
    description: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
