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
        orderBy: {
          createdAt: "desc",
        },
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

async function getAllCourses() {
  const Courses = await prisma.course.findMany({});
  // return courses_json;
  return Courses;
}

async function getConferenceIdByCourseId(courseId) {
  const conference = await prisma.course.findUnique({
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
  console.log("conf", conference);
  return conference.conferences[0].id;
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

/*async function getAllCourses() {
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
}*/

async function getCoursesByRole(role, userId) {
  if (role === "teacher") {
    const teacher = await prisma.teacher.findUnique({
      where: {
        user_id: userId,
      },
      select: {
        id: true,
      },
    });
    const courses = await prisma.course.findMany({
      where: {
        teacherId: teacher.id,
      },
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
    return courses;
  } else if (role === "student") {
    const student = await prisma.student.findUnique({
      where: {
        user_id: userId,
      },
      select: {
        classId: true,
      },
    });

    const courses = await prisma.course.findMany({
      where: {
        classId: student.classId,
      },
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
    return courses;
  } else if (role === "admin") {
    const courses = await prisma.course.findMany({
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
    return courses;
  }
  // return courses_json;
}
async function createCourse(body) {
  const createdStudent = await prisma.course.create({
    data: {
      name: body.name,

      teacher: {
        connect: {
          id: body.teacher,
        },
      },
      class: {
        connect: {
          id: body.class,
        },
      },
      subject: {
        connect: {
          id: body.subject,
        },
      },
    },
    include: {
      teacher: true,
      class: true,
      subject: true,
    },
  });
  return createdStudent;
}
module.exports.getCourse = getCourse;
module.exports.getConferenceIdByCourseId = getConferenceIdByCourseId;
module.exports.isConferenceHappening = isConferenceHappening;
module.exports.getCoursesByCriteria = getCoursesByCriteria;
module.exports.getAllCourses = getAllCourses;
module.exports.getCoursesByRole = getCoursesByRole;
module.exports.setIsConferenceHappening = setIsConferenceHappening;
module.exports.createCourse = createCourse;
