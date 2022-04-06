const express = require("express");
const router = express.Router();
require("./patch");
const userServices = require("../../services/userServices");

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.get("/get_teachers", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  // let courseId = req.query.courseId;

  userServices
    .getTeachers()
    .then((teachers) => {
      res.status(200).json(teachers);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem retrieving the teachers.",
      });
    });
});

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.get("/get_teachers_detailled", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  // let courseId = req.query.courseId;

  userServices
    .getTeachersDetailled()
    .then((teachers) => {
      res.status(200).send(teachers);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem retrieving the teachers.",
      });
    });
});

module.exports = router;
