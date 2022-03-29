const express = require("express");
const router = express.Router();

const postServices = require("../../services/postServices");

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.get("/get_posts/", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  let courseId = req.query.courseId;

  postServices
    .getPostsByCourseId(courseId)
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem retrieving the posts.",
      });
    });
});

module.exports = router;
