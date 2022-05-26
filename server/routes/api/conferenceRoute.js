const express = require("express");
const router = express.Router();

const conferenceServices = require("../../services/conferenceServices");

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.get("/get_conferences/", (req, res) => {
  // const { user_who_requested_id } = req.query;
  //const { courseId } = req.params.courseId;
  conferenceServices
    .getCourseConferences(req.body)
    .then((conferences) => {
      res.status(200).json(conferences);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem retrieving the conferences.",
      });
    });
});

router.post("/add_conference", (req, res) => {
    console.log(req.body.conference);
  conferenceServices
  .addConference(req.body.conference)
  .then(() => { res.status(200).json({message: "SUCCESS"}); })
  .catch((error) => {
    console.log(error);
    res.status(400).json({message: "There was a problem adding the conference."});
  });
});

router.put("/update_conference", (req, res) => {
  conferenceServices
  .updateConference({id: req.conferenceId}, req.conference)
  .then(() => { res.status(200); })
  .catch((error) => {
    console.log(error);
    res.status(400).json({message: "There was a problem updating the conference."})
  });
});

router.delete("/delete_conference", (req, res) => {
  conferenceServices
  .deleteConference({id: req.conferenceId})
  .then(() => {res.status(200);})
  .catch((error)=>{
    console.log(error);
    res.status(400).json({message: "There was a problem deleting the conference."})
  })
});
module.exports = router;
