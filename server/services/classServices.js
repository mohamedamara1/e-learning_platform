const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getClassesByCriteria(Criteria) {
  const Courses = await prisma.class.findMany({
    where: Criteria,
  });
  return Courses;
}

async function getAllClasses() {
  const classes = await prisma.class.findMany({
    select: {
      id: true,
      name: true,
      courses: {
        select: {
          name: true,
        },
      },
    },
  });
  // return courses_json;
  return classes;
}

//module.exports.getClass = getClass;
//module.exports.getClassesByCriteria = getClassesByCriteria;
module.exports.getAllClasses = getAllClasses;
