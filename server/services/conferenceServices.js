const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bbb = require("bigbluebutton-js-fork");
const courseServices = require("./courseServices");
const { v4: uuidv4 } = require("uuid");
const { format } = require("date-fns");
const schedule = require("node-schedule");

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

async function setConferenceStatus(conferenceId, status) {
  const conference = await prisma.conference.update({
    where: {
      id: conferenceId,
    },
    data: {
      status: status,
    },
  });
  return conference;
}

async function createConference(data) {
  if (data.instant) {
    console.log("instant here");
    let conferenceId = uuidv4();
    const createdConference = await prisma.conference.create({
      data: {
        id: conferenceId,
        course: {
          connect: {
            id: data.courseId,
          },
        },
        title: data.title,
        status: "happening",
        scheduledStartTime: format(Date.now(), "yyyy-MM-dd'T'HH:mm:ss'Z'"),
        duration: parseInt(data.duration),
      },
    });

    courseServices.setIsConferenceHappening(createdConference.courseId, true);

    const createdMeetingBBB = await createMeetingBBB(data.title, conferenceId);
    return createdMeetingBBB;
  } else if (!data.instant) {
    let conferenceId = uuidv4();

    const createdConference = await prisma.conference.create({
      data: {
        id: conferenceId,
        course: {
          connect: {
            id: data.courseId,
          },
        },
        title: data.title,
        status: "scheduled",
        scheduledStartTime: toISOLocal(new Date(data.datetime * 1000)),
        duration: parseInt(data.duration),
      },
    });
    console.log(createdConference);

    const scheduledStartTime = toISOLocal(new Date(data.datetime * 1000));
    console.log(scheduledStartTime);

    const job = schedule.scheduleJob(
      scheduledStartTime,
      function (conference) {
        console.log("conference happening");
        console.log(conference);
        setConferenceStatus(conference.id, "happening");
        courseServices.setIsConferenceHappening(conference.courseId, true);
        createMeetingBBB(data.title, createdConference.id);
      }.bind(null, createdConference)
    );
    return "created meeting succesfully";
  }
}

async function createMeetingBBB(name, meetingId) {
  let api = bbb.api(process.env.BBB_URL, process.env.BBB_SECRET);
  let http = bbb.http;
  let createMeetingUrl = api.administration.create(name, meetingId);
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
  const meetingID = await courseServices.getConferenceIdByCourseId(
    data.courseId
  );
  console.log("meeting id", meetingID);
  const { fullName, role } = data;
  if (role === "student") {
    let joinMeetingUrl = api.administration.joinByRole(
      fullName,
      meetingID,
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

/*async function joinUserByRole(data) {
  let api = bbb.api(process.env.BBB_URL, process.env.BBB_SECRET);
  let http = bbb.http;
 // const meetingId = data.meetingId;
 // console.log("meeting id", meetingId);
  const { fullName, role, meetingID } = data;
  if (role === "student") {
    let joinMeetingUrl = api.administration.joinByRole(
      fullName,
      meetingID,
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
      "moderator"
    );
    console.log("joinMeetingUrl", joinMeetingUrl);
    let joinMeeting = await http(joinMeetingUrl);
    return joinMeeting;
  } else {
    return null;
  }
}
*/
function toISOLocal(d) {
  var z = (n) => ("0" + n).slice(-2);
  var zz = (n) => ("00" + n).slice(-3);
  var off = d.getTimezoneOffset();
  var sign = off > 0 ? "-" : "+";
  off = Math.abs(off);

  return (
    d.getFullYear() +
    "-" +
    z(d.getMonth() + 1) +
    "-" +
    z(d.getDate()) +
    "T" +
    z(d.getHours()) +
    ":" +
    z(d.getMinutes()) +
    ":" +
    z(d.getSeconds()) +
    "." +
    zz(d.getMilliseconds()) +
    sign +
    z((off / 60) | 0) +
    ":" +
    z(off % 60)
  );
}
module.exports.getConferences = getConferences;
module.exports.getConferenceInfo = getConferenceInfo;
module.exports.joinUserByPassword = joinUserByPassword;
module.exports.joinUserByRole = joinUserByRole;
module.exports.createConference = createConference;
module.exports.createMeetingBBB = createMeetingBBB;
module.exports.setConferenceStatus = setConferenceStatus;
