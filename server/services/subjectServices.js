const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
async function getSubject(Criteria) {
  const Subject = await prisma.subject.findUnique({
    where: Criteria,
  });
  return Subject;
}

async function getAllSubjects() {
  const subjects = await prisma.subject.findMany();
  return subjects;
}

async function addSubject(subjectData) {
  const createdSubject = await prisma.subject.create({
    data: {
      name: subjectData.name,
      coefficient: parseFloat(subjectData.coefficient),
    },
    include: {
      courses: true,
      courses: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  return createdSubject;
}

async function updateSubject(Criteria, subjectData) {
  const updatedSubject = prisma.subject.update({
    where: Criteria,
    data: {
      ...subjectData,
      coefficient: parseFloat(subjectData.coefficient),
    },
    include: {
      courses: true,
      courses: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  return updatedSubject;
}

async function deleteSubject(Criteria) {
  const deletedSubject = prisma.subject.delete({
    where: Criteria,
  });
}

module.exports.getSubject = getSubject;
module.exports.getAllSubjects = getAllSubjects;
module.exports.addSubject = addSubject;
module.exports.updateSubject = updateSubject;
module.exports.deleteSubject = deleteSubject;
