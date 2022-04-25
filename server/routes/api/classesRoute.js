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

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.post("/add_class", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  let data = req.body;
  console.log(data);
  classServices
    .addClass(data)
    .then((studentClass) => {
      res.status(200).send(studentClass);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem adding the class.",
      });
    });
});

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.put("/update_class", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  let studentClassId = req.query.studentClassId;
  let data = req.body;
  classServices
    .updateClass({ id: studentClassId }, data)
    .then((studentClass) => {
      res.status(200).send(studentClass);
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

router.delete("/delete_class", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  let studentClassId = req.query.studentClassId;
  classServices
    .deleteClass({ id: studentClassId })
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
