const express = require("express");
const router = express.Router();

const verifySession =
  require("supertokens-node/recipe/session/framework/express").verifySession;
const SessionRequest =
  require("supertokens-node/framework/express").SessionRequest;
const courseServices = require("../../services/courseServices");
const permit = require("../middlewares/authorization").permit;

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.get("/get_courses", verifySession(), (req, res) => {
  const { role } = req.session.getAccessTokenPayload();
  let userId = req.session.getUserId();
  console.log(userId);

  courseServices
    .getCoursesByRole(role, userId)
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

router.get("/get_courses_old", (req, res) => {
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

router.get("/get_course", verifySession(), (req, res) => {
  let courseId = req.query.courseId;

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
