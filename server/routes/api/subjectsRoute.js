const express = require("express");
const router = express.Router();

const subjectServices = require("../../services/subjectServices");

// @route  Post api/v1/subjects/add_subject
// @desc   Add subject
// @access Private

router.post("/add_subject", (req, res) => {
  const { name, coefficient } = req.body;

  subjectServices
    .addSubject(name, coefficient)
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

module.exports = router;
