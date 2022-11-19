const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let articleSchema = new Schema(
  {
    coleccion: {
      type: Number,
    },
    name: {
      type: String,
    },
    precio: {
      type: Number,
    },
    img: {
      type: String,
    },
    descr: {
      type: String,
    },
  },
  {
    collection: "articulos",
  }
);

module.exports = mongoose.model("articulos", articleSchema);
