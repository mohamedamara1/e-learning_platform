const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getExercice(Criteria) {
  const Exercice = await prisma.exercice.findUnique({
    where: Criteria,
  });
  return Exercice;
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

async function addExercice(Exercice) {
  const CreateExercice = await prisma.exercice.create({ data: Exercice });
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
