const express = require("express");
const router = express.Router();

const classServices = require("../../services/classServices");

router.get("/get_classes", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  // let courseId = req.query.courseId;

  classServices
    .getAllClasses()
    .then((classes) => {
      res.status(200).json(classes);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem retrieving the classes.",
      });
    });
});

module.exports = router;
