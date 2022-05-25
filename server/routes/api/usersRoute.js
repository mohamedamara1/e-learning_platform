const express = require("express");
const router = express.Router();
require("./patch");

const verifySession =
  require("supertokens-node/recipe/session/framework/express").verifySession;
const userServices = require("../../services/userServices");
const permit = require("../middlewares/authorization").permit;

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

router.get(
  "/get_teachers_detailled",

  (req, res) => {
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
  }
);

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.put("/teacher", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  let teacherId = req.query.teacherId;
  console.log(teacherId);
  let data = req.body;
  userServices
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
  userServices
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

router.get("/get_students", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  // let courseId = req.query.courseId;

  userServices
    .getStudents()
    .then((students) => {
      res.status(200).json(students);
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

router.get(
  "/get_students_detailled",

  (req, res) => {
    // const { user_who_requested_id } = req.query;
    //const { courseId } = req.params.courseId;
    // let courseId = req.query.courseId;

    userServices
      .getStudentsDetailled()
      .then((students) => {
        res.status(200).send(students);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({
          message: "There was a problem retrieving the teachers.",
        });
      });
  }
);

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.put("/student", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  let studentId = req.query.studentId;
  console.log(studentId);
  let data = req.body;
  userServices
    .updateStudent({ id: studentId }, data)
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

router.delete("/student", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  let studentId = req.query.studentId;
  userServices
    .deleteStudent({ id: studentId })
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
