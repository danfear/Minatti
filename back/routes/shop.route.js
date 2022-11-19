let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Modelo Estudiante
let articleSchema = require("../models/article");

// LEER prendas
router.route("/list/:type").get((req, res, next) => {
  articleSchema.find({ coleccion: req.params.type }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// crear prenda
router.route("/create-article").post((req, res, next) => {
  articleSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

module.exports = router;
