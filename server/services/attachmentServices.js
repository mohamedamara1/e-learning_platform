const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getAttachment(Criteria) {
  const Attachment = await prisma.attachment.findUnique({
    where: Criteria,
  });
  return Attachment;
}

async function getAllAttachments() {
  const Attachments = await prisma.attachment.findMany();
  return Attachments;
}

async function getAttachmentsByCriteria(Criteria) {
  const Attachments = await prisma.attachment.findMany({
    where: Criteria,
  });
  return Attachments;
}

async function addAttachment(Attachment) {
  const CreateAttachment = await prisma.attachment.create({
    data: Attachment,
  });
}

async function updateAttachment(Criteria, AttachmentData) {
  const UpdateAttachment = prisma.attachment.update({
    where: Criteria,
    data: AttachmentData,
  });
}

async function deleteAttachment(Criteria) {
  const DeleteAttachment = prisma.attachment.delete({
    where: Criteria,
  });
}

module.exports.getAttachment = getAttachment;
module.exports.getAllAttachments = getAllAttachments;
module.exports.getAttachmentsByCriteria = getAttachmentsByCriteria;
module.exports.addAttachment = addAttachment;
module.exports.updateAttachment = updateAttachment;
module.exports.deleteAttachment = deleteAttachment;
