const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getExercice(Criteria) {
  const Exercice = await prisma.exercice.findUnique({
    where: Criteria,
  });
  return Exercice;
}
async function getPracticeUnitsByCourseIdIncludingExercices(courseId) {
  const practiceUnits = await prisma.practiceUnit.findMany({
    where: {
      courseId: courseId,
    },
    include: {
      exercices: true,
      exercices: {
        include: {
          exerciceAttachements: true,
        },
      },
    },
  });
  return practiceUnits;
}
async function getPracticeUnitsByCourseId(courseId) {
  const practiceUnits = await prisma.practiceUnit.findMany({
    where: {
      courseId: courseId,
    },
  });
  return practiceUnits;
}
async function getExercicesByPracticeUnitId(practiceUnitId) {
  const exercices = await prisma.exercice.findMany({
    where: {
      practiceUnitId: practiceUnitId,
    },
  });
  return exercices;
}

async function getAllExercices() {
  const Exercices = await prisma.exercice.findMany({
    include: {
      AssignmentSubmission: true,
    },
  });
  return Exercices;
}

async function getExercicesByCriteria(Criteria, Includes) {
  const Exercices = await prisma.exercice.findMany({
    where: Criteria,
    include: Includes,
  });
  return Exercices;
}

async function addExercice(exerciceData,attachementData) {
  const CreateExercice = await prisma.exercice.create({ 
    data: {
      name : exerciceData.name,
      description : exerciceData.description,
      isAssignment : exerciceData.isAssignment,
      deadlineTimestamp : exerciceData.deadlineTimeStamp,
      practiceUnit : {
        connect: {
          id: exerciceData.practiceUnitId,
        },
    },
  }
});
  attachementData.map(async (attachement)=>{
    console.log(attachement);
    const Createattachement = await prisma.attachement.create({
      data : {
        name : attachement.name,
        fileExtension : attachement.type,
        size : attachement.size.toString()
      },
      select: {id:true}
      });
    console.log(Createattachement);
    const CreateExerciceAttachement = await prisma.exerciceAttachement.create({
      data : {exerciceId:CreateExercice.id, attachementId:Createattachement.id}
      });
      console.log(CreateExerciceAttachement);
  });

  return CreateExercice;
}

async function updateExercice(Criteria, ExerciceData) {
  const updateExercice = prisma.exercice.update({
    where: Criteria,
    data: ExerciceData,
  });
}

async function deleteExercice(Criteria) {
  const DeleteExercice = prisma.exercice.delete({
    where: Criteria,
  });
}

async function getAllExerciceUnits() {
  const ExerciceUnits = await prisma.practiceUnit.findMany();
  return ExerciceUnits;
}

module.exports.getExercice = getExercice;
module.exports.getAllExercices = getAllExercices;
module.exports.getExercicesByCriteria = getExercicesByCriteria;
module.exports.addExercice = addExercice;
module.exports.updateExercice = updateExercice;
module.exports.deleteExercice = deleteExercice;
module.exports.getAllExerciceUnits = getAllExerciceUnits;

module.exports.getPracticeUnitsByCourseIdIncludingExercices =
  getPracticeUnitsByCourseIdIncludingExercices;
module.exports.getExercicesByPracticeUnitId = getExercicesByPracticeUnitId;
module.exports.getPracticeUnitsByCourseId = getPracticeUnitsByCourseId;
