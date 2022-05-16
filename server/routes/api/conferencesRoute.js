const express = require("express");
const router = express.Router();

const verifySession =
  require("supertokens-node/recipe/session/framework/express").verifySession;
const conferenceServices = require("../../services/conferenceServices");
const permit = require("../middlewares/authorization").permit;

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.get("/get_conferences", verifySession(), (req, res) => {
  // const { user_who_requested_id } = req.query;

  conferenceServices
    .getMeetings()
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

router.get("/get_conference_info", verifySession(), (req, res) => {
  // const { user_who_requested_id } = req.query;
  let conferenceId = req.query.conferenceId;

  conferenceServices
    .getConferenceInfo(conferenceId)
    .then((conference) => {
      res.status(200).json(conference);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem retrieving the conferences.",
      });
    });
});
module.exports = router;
