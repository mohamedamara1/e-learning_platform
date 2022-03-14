const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getAssignment(Criteria) {
  const Assignment = await prisma.assignment.findUnique({
    where: Criteria,
  });
  return Assignment;
}

async function getAllAssignments() {
  const Assignments = await prisma.assignment.findMany();
  return Assignments;
}

async function getAssignmentsByCriteria(Criteria, Includes) {
  const Assignments = await prisma.assignment.findMany({
    where: Criteria,
    include: Includes,
  });
  return Assignments;
}

async function addAssignment(Assignment) {
  const CreateAssignment = await prisma.assignment.create({ data: Assignment });
}

async function updateAssignment(Criteria, AssignmentData) {
  const updateAssignment = prisma.assignment.update({
    where: Criteria,
    data: AssignmentData,
  });
}

async function deleteAssignment(Criteria) {
  const DeleteAssignment = prisma.assignment.delete({
    where: Criteria,
  });
}

module.exports.getAssignment = getAssignment;
module.exports.getAllAssignments = getAllAssignments;
module.exports.getAssignmentsByCriteria = getAssignmentsByCriteria;
module.exports.addAssignment = addAssignment;
module.exports.updateAssignment = updateAssignment;
module.exports.deleteAssignment = deleteAssignment;
