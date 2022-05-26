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
  const subjects = await prisma.subject.findMany();
  /* // Teachers
  await Promise.all(
    Teachers.map(async (teacher) =>
      prisma.teacher.create({
        data: teacher,
      })
    )
  );*/

  const teachers = await prisma.teacher.findMany();

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
    Subjects.map(async (subject, index) =>
      prisma.course.create({
        data: {
          name:
            subject.name.charAt(0).toUpperCase() +
            subject.name.slice(1) +
            " Course",
          imageUrl: "",
          teacher: {
            connect: {
              id: teachers[Math.floor(Math.random() * teachers.length)].id,
            },
          },
          class: {
            connect: {
              id: classes[Math.floor(Math.random() * classes.length)].id,
            },
          },
          subject: {
            connect: {
              id: subjects[Math.floor(Math.random() * subjects.length)].id,
            },
          },
          posts: {
            create: Array.from(
              { length: Math.floor(Math.random() * Posts.length) },
              () => Math.floor(Math.random() * Posts.length)
            ).map((randomInt, index) => {
              return {
                text: Posts[randomInt].text,
                postAttachements: {
                  create: Array.from(
                    {
                      length: Math.floor(Math.random() * Attachements.length),
                    },
                    () => Math.floor(Math.random() * Attachements.length)
                  ).map((randomAttachementIndex, index) => {
                    return {
                      attachement: {
                        create: Attachements[randomAttachementIndex],
                      },
                    };
                  }),
                },
              };
            }),
          },
          class: {
            connect: {
              id: classes[Math.floor(Math.random() * classes.length)].id,
            },
          },
          subject: {
            connect: {
              id: subjects[Math.floor(Math.random() * subjects.length)].id,
            },
          },
          posts: {
            create: Array.from(
              { length: Math.floor(Math.random() * Posts.length) },
              () => Math.floor(Math.random() * Posts.length)
            ).map((randomInt, index) => {
              console.log(randomInt);
              console.log(Posts[randomInt]);
              return {
                text:
                  Posts[randomInt].text === undefined
                    ? "hi"
                    : Posts[randomInt].text,
                postAttachements: {
                  create: Array.from(
                    {
                      length: Math.floor(Math.random() * Attachements.length),
                    },
                    () => Math.floor(Math.random() * Attachements.length)
                  ).map((randomAttachementIndex, index) => {
                    return {
                      attachement: {
                        create: Attachements[randomAttachementIndex],
                      },
                    };
                  }),
                },
              };
            }),
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
            ],
          },
          practiceUnits: {
            create: [
              {
                title: PracticeUnits[0].title,
                exercices: {
                  create: [
                    {
                      name: Exercices[0].name,
                      description: Exercices[0].description,
                      isAssignment: Exercices[0].isAssignment,
                      name: Exercices[0].name,

                      exerciceAttachements: {
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
                title: PracticeUnits[1].title,
                exercices: {
                  create: [
                    {
                      name: Exercices[0].name,
                      description: Exercices[0].description,
                      isAssignment: Exercices[0].isAssignment,
                      name: Exercices[0].name,
                      exerciceAttachements: {
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
                title: PracticeUnits[2].title,
                exercices: {
                  create: [
                    {
                      name: Exercices[0].name,
                      description: Exercices[0].description,
                      isAssignment: Exercices[0].isAssignment,
                      name: Exercices[0].name,

                      exerciceAttachements: {
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
  */
  //PracticeUnits
  /* await Promise.all(
    PracticeUnits.map(async (practiceUnit) =>
      prisma.practiceUnit.create({
        data: practiceUnit,
      })
    )
  );*/
  /*
  // Exercices
  await Promise.all(
    Exercices.map(async (exercice) =>
      prisma.exercice.create({
        data: exercice,
      })
    )
  );
  */
  // MaterialUnits
  /*await Promise.all(
    MaterialUnits.map(async (materialUnit) =>
      prisma.materialUnit.create({
        data: materialUnit,
      })
    )
  );*/
  /*
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
