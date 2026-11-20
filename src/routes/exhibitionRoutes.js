const express = require("express");
const router = express.Router();
const {
  getAllExhibitions,
  getExhibitionById,
  createExhibition
} = require("../controllers/exhibitionController");

router.route("/")
  .get(getAllExhibitions)
  .post(createExhibition);

router.route("/:id")
  .get(getExhibitionById);

module.exports = router;
