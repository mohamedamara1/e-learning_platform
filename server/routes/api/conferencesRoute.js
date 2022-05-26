const express = require("express");
const router = express.Router();

const verifySession =
  require("supertokens-node/recipe/session/framework/express").verifySession;
const conferenceServices = require("../../services/conferenceServices");
const permit = require("../middlewares/authorization").permit;

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.get("/get_conferences", (req, res) => {
  // const { user_who_requested_id } = req.query;

  conferenceServices
    .getConferences()
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

router.get("/get_conference_info", (req, res) => {
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
/*
// @route  Post api/v1/subjects/add_subject
// @desc   Add subject
// @access Private

router.post("/join_conference_by_password", (req, res) => {
  const data = req.body;

  conferenceServices
    .joinUserByPassword(data)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem joining the conference.",
      });
    });
});
*/
// @route  Post api/v1/subjects/add_subject
// @desc   Add subject
// @access Private

router.post("/join_conference", verifySession(), (req, res) => {
  const { courseId } = req.body;
  const { role, fullName } = req.session.getAccessTokenPayload();
  console.log("by role", req.session.getAccessTokenPayload());
  console.log(req.session.getUserId());

  conferenceServices
    .joinUserByRole({
      courseId,
      role,
      fullName,
      userId: req.session.getUserId(),
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem joining the conference.",
      });
    });
});

router.post("/join_conference_bbb", (req, res) => {
  const { role, fullName } = req.body;
  console.log("by role", req.session.getAccessTokenPayload());
  console.log(req.session.getUserId());

  conferenceServices
    .joinUserByRole({
      courseId,
      role,
      fullName,
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem joining the conference.",
      });
    });
});
// @route  Post api/v1/subjects/add_subject
// @desc   Add subject
// @access Private

router.post("/create_conference", verifySession(), (req, res) => {
  const data = req.body;

  // console.log(courseId);
  console.log(data);

  conferenceServices
    .createConference(data)
    .then((createdConference) => {
      res.status(200).json(createdConference);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem creating the conference.",
      });
    });
});

// @route  Post api/v1/subjects/add_subject
// @desc   Add subject
// @access Private

router.get("/end_conference_callback", (req, res) => {
  // const data = req.body;
  console.log("end conference call back called");
  // console.log(req.query);
  // console.log(courseId);
  // console.log(data);
  let meetingID = req.query.meetingId;
  conferenceServices
    .endConferenceCallback(meetingID)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem creating the conference.",
      });
    });
});

// @route  Post api/v1/subjects/add_subject
// @desc   Add subject
// @access Private

router.post("/end_conference", (req, res) => {
  // const data = req.body;
  console.log("end conference endpoint called");

  conferenceServices
    .endConference(req.body.meetingID, req.body.password)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem creating the conference.",
      });
    });
});

module.exports = router;
