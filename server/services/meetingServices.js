const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bbb = require("bigbluebutton-js");

async function getMeetings() {
  let api = bbb.api(process.env.BBB_URL, process.env.BBB_SECRET);
  let http = bbb.http;
  let getMeetingsUrl = api.monitoring.getMeetings();
  let meetings = await http(infosUrl);
  return meetings;
}

async function getMeetingInfo(meetingId) {
  let api = bbb.api(process.env.BBB_URL, process.env.BBB_SECRET);
  let http = bbb.http;
  let getMeetingInfosUrl = api.monitoring.getMeetingInfo(meetingId);
  let meetingInfo = await http(getMeetingInfosUrl);
  return meetingInfo;
}

module.exports.getMeetings = getMeetings;
module.exports.getMeetingInfo = getMeetingInfo;
