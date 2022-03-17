const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const Classes = require("./data/classes");
const Subjects = require("./data/subjects");
const Teachers = require("./data/teachers");
const Students = require("./data/students");
const Courses = require("./data/courses");
const Posts = require("./data/posts");
const PracticeUnits = require("./data/practiceUnits");
const Exercices = require("./data/exercices");
const CourseMaterials = require("./data/courseMaterials");
const MaterialUnits = require("./data/materialUnits");
const Attachements = require("./data/attachements");
const PostAttachements = require("./data/postAttachements");

async function runSeeders() {
  // Classes
  await Promise.all(
    Classes.map(async (students_class) =>
      prisma.class.upsert({
        where: { id: students_class.id },
        update: {},
        create: students_class,
      })
    )
  );
  // Subjects
  await Promise.all(
    Subjects.map(async (subject) =>
      prisma.subject.upsert({
        where: { id: subject.id },
        update: {},
        create: subject,
      })
    )
  );
  // Teachers
  await Promise.all(
    Teachers.map(async (teacher) =>
      prisma.teacher.upsert({
        where: { id: teacher.id },
        update: {},
        create: teacher,
      })
    )
  );
  // Students
  await Promise.all(
    Students.map(async (student) =>
      prisma.student.upsert({
        where: { id: student.id },
        update: {},
        create: student,
      })
    )
  );
  // Courses
  await Promise.all(
    Courses.map(async (course) =>
      prisma.course.upsert({
        where: { id: course.id },
        update: {},
        create: course,
      })
    )
  );
  // Posts
  await Promise.all(
    Posts.map(async (post) =>
      prisma.post.upsert({
        where: { id: post.id },
        update: {},
        create: post,
      })
    )
  );
  // PracticeUnits
  await Promise.all(
    PracticeUnits.map(async (practiceUnit) =>
      prisma.practiceUnit.upsert({
        where: { id: practiceUnit.id },
        update: {},
        create: practiceUnit,
      })
    )
  );
  // Exercices
  await Promise.all(
    Exercices.map(async (exercice) =>
      prisma.exercice.upsert({
        where: { id: exercice.id },
        update: {},
        create: exercice,
      })
    )
  );
  // MaterialUnits
  await Promise.all(
    MaterialUnits.map(async (materialUnit) =>
      prisma.materialUnit.upsert({
        where: { id: materialUnit.id },
        update: {},
        create: materialUnit,
      })
    )
  );
  // CourseMaterials
  await Promise.all(
    CourseMaterials.map(async (courseMaterial) =>
      prisma.courseMaterial.upsert({
        where: { id: courseMaterial.id },
        update: {},
        create: courseMaterial,
      })
    )
  );
  // Attachements
  await Promise.all(
    Attachements.map(async (attachement) => {
      var attachementId = attachement.id;
      return prisma.attachement.upsert({
        where: { id: attachementId },
        update: {},
        create: attachement,
      });
    })
  );
  // PostAttachements
  await Promise.all(
    PostAttachements.map(async (postAttachement) => {
      var postId = postAttachement.postId;
      var attachementId = postAttachement.attachementId;

      return prisma.postAttachement.upsert({
        where: {
          postId_attachementId: { postId, attachementId },
        },
        update: {},
        create: postAttachement,
      });
    })
  );
}

runSeeders()
  .catch((e) => {
    console.error(`There was an error while seeding: ${e}`);
    process.exit(1);
  })
  .finally(async () => {
    console.log("Successfully seeded database. Closing connection.");
    await prisma.$disconnect();
  });
