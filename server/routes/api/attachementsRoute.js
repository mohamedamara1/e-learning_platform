const express = require("express");
const router = express.Router();

const attachementServices = require("../../services/attachementServices");

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.get("/get_postAttachements/", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  let courseId = parseInt(req.query.courseId);
  attachementServices
    .getPostAttachementsByCourseId(courseId)
    .then((postAttachements) => {
      res.status(200).json(postAttachements);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem retrieving the postAttachements.",
      });
    });
});

module.exports = router;
