const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getAttendance(Criteria) {
  const Attendance = await prisma.studentattendance.findUnique({
    where: Criteria,
  });
  return Attendance;
}

async function getAllAttendances() {
  const Attendances = await prisma.studentattendance.findMany();
  return Attendances;
}

async function addAttendance(Attendance) {
  const CreateAttendance = await prisma.studentattendance.create({
    data: Attendance,
  });
}

async function updateAttendance(Criteria, AttendanceData) {
  const UpdateStudent = prisma.studentattendance.update({
    where: Criteria,
    data: AttendanceData,
  });
}

async function deleteAttendance(Criteria) {
  const DeleteAttendance = prisma.studentattendance.delete({
    where: Criteria,
  });
}

module.exports.getAttendance = getAttendance;
module.exports.getAllAttendances = getAllAttendances;
module.exports.addAttendance = addAttendance;
module.exports.updateAttendance = updateAttendance;
module.exports.deleteAttendance = deleteAttendance;
