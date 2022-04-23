const express = require("express");
const router = express.Router();
require("./patch");
const userServices = require("../../services/userServices");

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.get("/get_classes", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  // let courseId = req.query.courseId;

  classServices
    .getStudentsClasses()
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

router.get("/get_classes_detailled", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  // let courseId = req.query.courseId;

  userServices
    .getClassesDetailled()
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

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.put("/teacher", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  let teacherId = req.query.teacherId;
  console.log(teacherId);
  let data = req.body;
  classServices
    .updateTeacher({ id: teacherId }, data)
    .then((teacher) => {
      res.status(200).send(teacher);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem updating the teacher.",
      });
    });
});

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.delete("/teacher", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  let teacherId = req.query.teacherId;
  classServices
    .deleteTeacher({ id: teacherId })
    .then(() => {
      res.status(200).send("deleted");
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem deleting the teacher.",
      });
    });
});
module.exports = router;
