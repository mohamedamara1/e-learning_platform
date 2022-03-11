const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
async function getSubject(Criteria) {
  const Subject = await prisma.subject.findUnique({
    where: Criteria,
  });
  return Subject;
}

async function getAllSubjects() {
  const Subjects = await prisma.subject.findMany();
  return Subjects;
}

async function addSubject(Subject) {
  const CreateSubject = await prisma.subject.create({ data: Subject });
}

async function updateSubject(Criteria, SubjectData) {
  const updateSubject = prisma.subject.update({
    where: Criteria,
    data: SubjectData,
  });
}

async function deleteSubject(Criteria) {
  const DeleteSubject = prisma.subject.delete({
    where: Criteria,
  });
}

module.exports.getSubject = getSubject;
module.exports.getAllSubjects = getAllSubjects;
module.exports.addSubject = addSubject;
module.exports.updateSubject = updateSubject;
module.exports.deleteSubject = deleteSubject;
