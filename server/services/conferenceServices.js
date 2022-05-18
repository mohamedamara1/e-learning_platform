const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bbb = require("bigbluebutton-js-fork");
const courseServices = require("./courseServices");

async function getConferences() {
  let api = bbb.api(process.env.BBB_URL, process.env.BBB_SECRET);
  let http = bbb.http;
  let getMeetingsUrl = api.monitoring.getMeetings();
  console.log(getMeetingsUrl);
  let meetings = await http(getMeetingsUrl);
  return meetings;
}

async function getConferenceInfo(conferenceId) {
  let api = bbb.api(process.env.BBB_URL, process.env.BBB_SECRET);
  let http = bbb.http;
  let getMeetingInfosUrl = api.monitoring.getMeetingInfo(conferenceId);
  let meetingInfo = await http(getMeetingInfosUrl);
  return meetingInfo;
}

async function createConference(data) {
  let api = bbb.api(process.env.BBB_URL, process.env.BBB_SECRET);
  let http = bbb.http;

  const { name, meetingID } = data;

  let createMeetingUrl = api.administration.create(name, meetingID);
  console.log(createMeetingUrl);
  let createdMeeting = await http(createMeetingUrl);
  return createdMeeting;
}



async function joinUserByPassword(data) {
  let api = bbb.api(process.env.BBB_URL, process.env.BBB_SECRET);
  let http = bbb.http;

  const { fullName, meetingID, password } = data;

  let joinMeetingUrl = api.administration.join(fullName, meetingID, password, {
    redirect: "false",
  });
  console.log("joinMeetingUrl", joinMeetingUrl);
  let joinMeeting = await http(joinMeetingUrl);
  return joinMeeting;
}

async function joinUserByRole(data) {
  if (!courseServices.isConferenceHappening(data.courseId)) {
    throw new Error("Conference is not happening");
  }

  if (data.role === "student") {
    let student = await prisma.student.findOne({
      where: {
        userId: data.userId,
      },
    });
    if (!student) {
      throw new Error("Student not found");
    }
  }

  let api = bbb.api(process.env.BBB_URL, process.env.BBB_SECRET);
  let http = bbb.http;
  const meetingId = courseServices.getConferenceIdByCourseId(data.courseId);
  const { fullName, role } = data;
  if (role === "student") {
    let joinMeetingUrl = api.administration.joinByRole(
      fullName,
      meetingId,
      "attendee",
      {
        redirect: "false",
      }
    );
    console.log("joinMeetingUrl", joinMeetingUrl);
    let joinMeeting = await http(joinMeetingUrl);
    return joinMeeting;
  } else if (role === "teacher") {
    let joinMeetingUrl = api.administration.joinByRole(
      fullName,
      meetingID,
      "moderator",
      {
        redirect: "false",
      }
    );
    console.log("joinMeetingUrl", joinMeetingUrl);
    let joinMeeting = await http(joinMeetingUrl);
    return joinMeeting;
  } else {
    return null;
  }
}
module.exports.getConferences = getConferences;
module.exports.getConferenceInfo = getConferenceInfo;
module.exports.joinUserByPassword = joinUserByPassword;
module.exports.joinUserByRole = joinUserByRole;
module.exports.createConference = createConference;
