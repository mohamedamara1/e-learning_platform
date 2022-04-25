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

async function addClass(classData) {
  const createdClass = await prisma.class.create({
    data: {
      ...classData,
      population: parseInt(classData.population),
      courses: {
        connect: classData.courses.map((courseId) => ({ id: courseId })),
      },
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
  return createdClass;
}
async function updateClass(criteria, classData) {
  const updatedClass = await prisma.class.update({
    where: criteria,
    data: {
      ...classData,
      courses: {
        connect: classData.courses.map((courseId) => ({ id: courseId })),
      },
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
  return updatedClass;
}
async function deleteClass(Criteria) {
  const deletedClass = await prisma.class.delete({
    where: Criteria,
  });
}
//module.exports.getClass = getClass;
//module.exports.getClassesByCriteria = getClassesByCriteria;
module.exports.getAllClasses = getAllClasses;
module.exports.addClass = addClass;
module.exports.updateClass = updateClass;
module.exports.deleteClass = deleteClass;
