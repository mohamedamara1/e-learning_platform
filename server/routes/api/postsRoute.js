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

router.post("/add_post", (req, res) => {
  postServices
    .addPost(req.post)
    .then(() => { res.status(200); })
    .catch((error) =>{
      console.log(error);
      res.status(400).json({message: "There was a problem adding the post."})
    });

});

router.put("/edit_post", (req, res) => {
  postServices
    .updatePost({id : req.postId}, req.post)
    .then(() => { res.status(200); })
    .catch((error) =>{
      console.log(error);
      res.status(400).json({message: "There was a problem updating the post."})
    });
});

router.delete("/delete_post", (req, res) => {
  postServices
    .deletePost({Id: req.postId})
    .then(() => {req.status(200); })
    .catch((error) => {
      console.log(error);
      res.status(400).json({message: "There was a problem deleting the post."})
    })
});
module.exports = router;
