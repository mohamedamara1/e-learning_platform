const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getCourse(Criteria) {
  const course = await prisma.course.findUnique({
    where: Criteria,
    include: {
      teacher: true,
      posts: true,
      teacher: {
        select: {
          fullName: true,
        },
      },
      posts: {
        include: {
          postAttachements: true,
          postAttachements: {
            select: {
              attachement: true,
            },
          },
        },
      },
    },
  });
  return course;
}

async function getConferenceIdByCourseId(courseId) {
  const course = await prisma.course.findUnique({
    where: {
      id: courseId,
    },
    select: {
      conferences: {
        orderBy: {
          createdAt: "desc",
        },
        take: 1,
      },
    },
  });
  return course.conferenceId;
}

async function isConferenceHappening(courseId) {
  const course = await prisma.course.findUnique({
    where: {
      id: courseId,
    },
    select: {
      isConferenceHappening: true,
    },
  });
  return course.isConferenceHappening;
}

async function getCoursesByCriteria(Criteria) {
  const Courses = await prisma.course.findMany({
    where: Criteria,
  });
  return Courses;
}

async function setIsConferenceHappening(courseId, isConferenceHappening) {
  const course = await prisma.course.update({
    where: {
      id: courseId,
    },
    data: {
      isConferenceHappening: isConferenceHappening,
    },
  });
  return course;
}

async function getAllCourses() {
  const Courses = await prisma.course.findMany({
    select: {
      id: true,
      name: true,
      teacher: {
        select: {
          id: true,
          fullName: true,
        },
      },
      class: {
        select: {
          id: true,
          name: true,
        },
      },
      subject: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  // return courses_json;
  return Courses;
}

module.exports.getCourse = getCourse;
module.exports.getConferenceIdByCourseId = getConferenceIdByCourseId;
module.exports.isConferenceHappening = isConferenceHappening;
module.exports.getCoursesByCriteria = getCoursesByCriteria;
module.exports.getAllCourses = getAllCourses;
module.exports.setIsConferenceHappening = setIsConferenceHappening;
