const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getCourse(Criteria) {
  const course = await prisma.course.findUnique({
    where: Criteria,
  });
  return course;
}

async function getCoursesByCriteria(Criteria) {
  const Courses = await prisma.course.findMany({
    where: Criteria,
  });
  return Courses;
}

async function getAllCourses() {
  const Courses = await prisma.course.findMany();
  return Courses;
}

module.exports.getCourse = getCourse;
module.exports.getCoursesByCriteria = getCoursesByCriteria;
module.exports.getAllCourses = getAllCourses;
