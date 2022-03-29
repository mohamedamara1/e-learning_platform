const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getAssignmentSubmission(Criteria) {
  const AssignmentSubmission = await prisma.assignmentsubmission.findUnique({
    where: Criteria,
  });
  return AssignmentSubmission;
}

async function getAllSubmissions() {
  const Submissions = await prisma.assignmentsubmission.findMany();
  return Submissions;
}

async function addSubmission(Submission) {
  const CreateSubmission = await prisma.assignmentsubmission.create({
    data: Submission,
  });
}

async function updateSubmission(Criteria, SubmissionData) {
  const UpdateSubmission = prisma.assignmentsubmission.update({
    where: Criteria,
    data: SubmissionData,
  });
}

async function deleteSubmission(Criteria) {
  const DeleteSubmission = prisma.assignmentsubmission.delete({
    where: Criteria,
  });
}

module.exports.getAssignmentSubmission = getAssignmentSubmission;
module.exports.getAllSubmissions = getAllSubmissions;
module.exports.addSubmission = addSubmission;
module.exports.updateSubmission = updateSubmission;
module.exports.deleteSubmission = deleteSubmission;
