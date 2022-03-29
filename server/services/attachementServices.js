const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getAttachement(Criteria) {
  const Attachement = await prisma.attachement.findUnique({
    where: Criteria,
  });
  return Attachement;
}

async function getAllAttachements() {
  const Attachements = await prisma.attachement.findMany();
  return Attachements;
}

async function getAttachementsByCriteria(Criteria) {
  const Attachements = await prisma.attachement.findMany({
    where: Criteria,
  });
  return Attachements;
}

async function addAttachement(Attachement) {
  const CreateAttachement = await prisma.attachement.create({
    data: Attachement,
  });
}

async function updateAttachement(Criteria, AttachementData) {
  const UpdateAttachement = prisma.attachement.update({
    where: Criteria,
    data: AttachementData,
  });
}

async function deleteAttachement(Criteria) {
  const DeleteAttachement = prisma.attachement.delete({
    where: Criteria,
  });
}

async function getPostAttachementsByCourseId(courseId) {
 // console.log(courseId);
  const postAttachements = await prisma.postAttachement.findMany({
    select: {
      attachement: true,
      post: {
        select: {
          courseId: true,
        },
      },
    },
    where: {
      post: {
        courseId: courseId,
      },
    },
  });
  return postAttachements;
}

module.exports.getAttachement = getAttachement;
module.exports.getAllAttachements = getAllAttachements;
module.exports.getAttachementsByCriteria = getAttachementsByCriteria;
module.exports.addAttachement = addAttachement;
module.exports.updateAttachement = updateAttachement;
module.exports.deleteAttachement = deleteAttachement;
module.exports.getPostAttachementsByCourseId = getPostAttachementsByCourseId;
