const express = require("express");
const router = express.Router();
const {
  getAllVisitors,
  getVisitorById,
  createVisitor,
  updateVisitor,
  deleteVisitor
} = require("../controllers/visitorController");

router.route("/")
  .get(getAllVisitors)
  .post(createVisitor);

router.route("/:id")
  .get(getVisitorById)
  .put(updateVisitor)
  .delete(deleteVisitor);

module.exports = router;
