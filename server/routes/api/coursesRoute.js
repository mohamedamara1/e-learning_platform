const express = require("express");
const router = express.Router();

const courseServices = require("../../services/courseServices");

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.get("/get_courses", (req, res) => {
  // const { user_who_requested_id } = req.query;

  courseServices
    .getAllCourses()
    .then((courses) => {
      res.status(200).json(courses);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem retrieving the courses.",
      });
    });
});

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.get("/get_course", (req, res) => {
  // const { user_who_requested_id } = req.query;
  let courseId = parseInt(req.query.courseId);

  courseServices
    .getCourse({ id: courseId })
    .then((course) => {
      res.status(200).json(course);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem retrieving the courses.",
      });
    });
});

module.exports = router;
