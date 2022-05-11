const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getConference(Criteria) {
  const Conference = await prisma.conference.findUnique({
    where: Criteria,
  });
  return Conference;
}

async function getCourseConferences(Criteria) {
  const Conferences = await prisma.conference.findMany({
    where: Criteria,
  });
  return Conferences;
}

async function getAllConferences() {
  const Conferences = await prisma.conference.findMany();
  return Conferences;
}

async function addConference(Conference) {
  const CreateConference = await prisma.conference.create({ data: Conference });
  console.log(CreateConference);
}

async function updateConference(Criteria, ConferenceData) {
  const UpdateConference = prisma.conference.update({
    where: Criteria,
    data: ConferenceData,
  });
}

async function deleteConference(Criteria) {
  const DeleteConference = prisma.conference.delete({
    where: Criteria,
  });
}

module.exports.getConference = getConference;
module.exports.getAllConferences = getAllConferences;
module.exports.addConference = addConference;
module.exports.updateConference = updateConference;
module.exports.deleteConference = deleteConference;
module.exports.getCourseConferences = getCourseConferences;