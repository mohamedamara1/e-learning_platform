const express = require("express");
const router = express.Router();

const subjectServices = require("../../services/subjectServices");

router.get("/get_subjects", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  // let courseId = req.query.courseId;

  subjectServices
    .getAllSubjects()
    .then((subjects) => {
      res.status(200).json(subjects);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem retrieving the subjects.",
      });
    });
});

// @route  Post api/v1/subjects/add_subject
// @desc   Add subject
// @access Private

router.post("/add_subject", (req, res) => {
  let subjectData = req.body;

  subjectServices
    .addSubject(subjectData)
    .then((added_subject) => {
      res.status(200).json(added_subject);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem adding the subject.",
      });
    });
});

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.put("/update_subject", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  let subjectId = req.query.subjectId;
  let data = req.body;
  subjectServices
    .updateSubject({ id: subjectId }, data)
    .then((updatedSubject) => {
      res.status(200).send(updatedSubject);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem updating the subject.",
      });
    });
});

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.delete("/delete_subject", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  let subjectId = req.query.subjectId;
  subjectServices
    .deleteSubject({ id: subjectId })
    .then(() => {
      res.status(200).send("deleted");
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem deleting the subject.",
      });
    });
});

module.exports = router;
