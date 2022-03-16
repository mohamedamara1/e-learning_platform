const { PrismaClient } = require("@prisma/client");
var courses_json = require("../db/courses.json");
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
  console.log(prisma.course);
  const Courses = await prisma.course.findMany({
    select: {
      id: true,
      name: true,
      teacher: {
        select: {
          fullName: true,
        },
      },
      class: {
        select: {
          name: true,
        },
      },
      subject: {
        select: {
          name: true,
        },
      },
    },
  });
  // return courses_json;
  return Courses;
}

module.exports.getCourse = getCourse;
module.exports.getCoursesByCriteria = getCoursesByCriteria;
module.exports.getAllCourses = getAllCourses;
