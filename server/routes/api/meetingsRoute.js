const express = require("express");
const router = express.Router();

const meetingServices = require("../../services/meetingServices");

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.get("/get_meetings", (req, res) => {
  // const { user_who_requested_id } = req.query;

  meetingServices
    .getMeetings()
    .then((meetings) => {
      res.status(200).json(meetings);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem retrieving the meetings.",
      });
    });
});

router.get("/get_meeting_info", (req, res) => {
  // const { user_who_requested_id } = req.query;
  let meetingId = req.query.meetingId;

  meetingServices
    .getMeetingInfo(meetingId)
    .then((meeting) => {
      res.status(200).json(meeting);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem retrieving the meetings.",
      });
    });
});
module.exports = router;

