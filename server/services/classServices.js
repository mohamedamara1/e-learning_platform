const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getStudentsClasses(Criteria) {
  const studentsClass = await prisma.class.findUnique({
    where: Criteria,
  });
  return studentsClass;
}

async function getAllStudentsClasses() {
  const studentsClasss = await prisma.class.findMany();
  return studentsClasss;
}

async function addStudentsClass(studentsClass) {
  const createdStudentsClass = await prisma.class.create({
    data: studentsClass,
  });
}

async function updatestudentsClass(Criteria, studentsClassData) {
  const updatedStudentsClass = prisma.class.update({
    where: Criteria,
    data: studentsClassData,
  });
}

async function deletestudentsClass(Criteria) {
  const deletedStudentsClass = prisma.class.delete({
    where: Criteria,
  });
}

module.exports.getstudentsClass = getstudentsClass;
module.exports.getAllstudentsClasss = getAllstudentsClasss;
module.exports.addstudentsClass = addstudentsClass;
module.exports.updatestudentsClass = updatestudentsClass;
module.exports.deletestudentsClass = deletestudentsClass;
