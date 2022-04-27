const express = require("express");
const router = express.Router();

const attachementServices = require("../../services/attachementServices");

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.get("/get_postAttachements/", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  let courseId = req.query.courseId;
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

router.post("/add_attachement", (req, res) => {
  attachementServices
  .addAttachement(req.attachement)
  .then(() => { res.status(200); })
  .catch((error) => {
    console.log(error);
    res.status(400).json({message: "There was a problem adding the attachement."});
  });
});

router.put("/update_attachement", (req, res) => {
  attachementServices
  .updateAttachement({id: req.attachementId}, req.attachement)
  .then(() => { res.status(200); })
  .catch((error) => {
    console.log(error);
    res.status(400).json({message: "There was a problem updating the attachement."})
  });
});

router.delete("/delete_attachement", (req, res) => {
  attachementServices
  .deleteAttachement({id: req.attachementId})
  .then(() => {res.status(200);})
  .catch((error)=>{
    console.log(error);
    res.status(400).json({message: "There was a problem deleting the attachement."})
  })
});
module.exports = router;
