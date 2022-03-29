const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getAnnouncements(Criteria) {
  const Announcement = await prisma.announcements.findUnique({
    where: Criteria,
  });
  return Announcement;
}

async function getAllAnnouncements() {
  const Announcements = await prisma.announcements.findMany();
  return Announcements;
}

async function addAnnouncement(Announcement) {
  const CreateAnnouncement = await prisma.announcements.create({
    data: Announcement,
  });
}

async function updateAnnouncement(Criteria, AnnouncementData) {
  const UpdateStudent = prisma.announcements.update({
    where: Criteria,
    data: AnnouncementData,
  });
}

async function deleteAnnouncement(Criteria) {
  const DeleteAnnouncement = prisma.announcements.delete({
    where: Criteria,
  });
}

module.exports.getAnnouncements = getAnnouncements;
module.exports.getAllAnnouncements = getAllAnnouncements;
module.exports.addAnnouncement = addAnnouncement;
module.exports.updateAnnouncement = updateAnnouncement;
module.exports.deleteAnnouncement = deleteAnnouncement;
