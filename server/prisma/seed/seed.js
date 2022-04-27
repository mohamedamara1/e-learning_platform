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
  await Promise.all(
    Classes.map(async (students_class) =>
      prisma.class.create({
        data: students_class,
      })
    )
  );
  const classes = await prisma.class.findMany();

  // Subjects
  await Promise.all(
    Subjects.map(async (subject) =>
      prisma.subject.create({
        data: subject,
      })
    )
  );
  const subjects = await prisma.class.findMany();

  /* // Teachers
  await Promise.all(
    Teachers.map(async (teacher) =>
      prisma.teacher.create({
        data: teacher,
      })
    )
  );*/
  const teachers = await prisma.teacher.findMany();
  console.log("teachers", teachers);

  /* // Students
  await Promise.all(
    Students.map(async (student) =>
      prisma.student.create({
        data: student,
      })
    )
  );
  const classes = await prisma.class.findMany();*/

  // Courses
  await Promise.all(
    Courses.map(async (course, index) =>
      prisma.course.create({
        data: {
          name: course.name,
          imageUrl: course.imageUrl,
          teacher: {
            connect: {
              id: teachers[0].id,
            },
          },
          class: { create: Classes[index] },
          subject: { create: Subjects[index] },
          posts: {
            create: [
              {
                text: Posts[index].text,
                postAttachements: {
                  create: [
                    {
                      attachement: {
                        create: Attachements[0],
                      },
                    },
                    {
                      attachement: {
                        create: Attachements[1],
                      },
                    },
                    {
                      attachement: {
                        create: Attachements[2],
                      },
                    },
                  ],
                },
              },
              {
                text: Posts[index].text,
                postAttachements: {
                  create: [
                    {
                      attachement: {
                        create: Attachements[0],
                      },
                    },
                    {
                      attachement: {
                        create: Attachements[1],
                      },
                    },
                    {
                      attachement: {
                        create: Attachements[2],
                      },
                    },
                  ],
                },
              },
              {
                text: Posts[index].text,
              },
              {
                text: Posts[index].text,
              },
            ],
          },
          materialUnits: {
            create: [
              {
                title: MaterialUnits[0].title,
                courseMaterials: {
                  create: [
                    {
                      name: CourseMaterials[0].name,
                      url: CourseMaterials[0].url,
                      materialAttachements: {
                        create: [
                          {
                            attachement: {
                              create: Attachements[0],
                            },
                          },
                          {
                            attachement: {
                              create: Attachements[1],
                            },
                          },
                          {
                            attachement: {
                              create: Attachements[2],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                title: MaterialUnits[1].title,
              },
              {
                title: MaterialUnits[2].title,
              },
              { title: MaterialUnits[3].title },
              { title: MaterialUnits[4].title },
            ],
          },
          practiceUnits: {
            create: [
              {
                title: PracticeUnits[0].title,
              },
              {
                title: PracticeUnits[1].title,
              },
              { title: PracticeUnits[2].title },
              { title: PracticeUnits[3].title },
              { title: PracticeUnits[4].title },
            ],
          },
        },
      })
    )
  );

  // Classes

  /*
  // Posts
  await Promise.all(
    Posts.map(async (post) =>
      prisma.post.create({
        data: post,
      })
    )
  );
  // PracticeUnits
  await Promise.all(
    PracticeUnits.map(async (practiceUnit) =>
      prisma.practiceUnit.create({
        data: practiceUnit,
      })
    )
  );
  // Exercices
  await Promise.all(
    Exercices.map(async (exercice) =>
      prisma.exercice.create({
        data: exercice,
      })
    )
  );
  // MaterialUnits
  await Promise.all(
    MaterialUnits.map(async (materialUnit) =>
      prisma.materialUnit.create({
        data: materialUnit,
      })
    )
  );
  // CourseMaterials
  await Promise.all(
    CourseMaterials.map(async (courseMaterial) =>
      prisma.courseMaterial.create({
        data: courseMaterial,
      })
    )
  );
  // Attachements
  await Promise.all(
    Attachements.map(async (attachement) => {
      var attachementId = attachement.id;
      return prisma.attachement.create({
        data: attachement,
      });
    })
  );
  */
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
