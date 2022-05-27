const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const nodemailer = require("nodemailer");

async function getUser(Criteria) {
  const User = await prisma.conference.findUnique({
    where: Criteria,
  });
  return User;
}

async function getAllUsers() {
  const Users = await prisma.conference.findMany();
  return Users;
}

async function addUser(User) {
  const createdUser = await prisma.account.create({ data: User });
  return createdUser;
}

async function updateUser(Criteria, UserData) {
  const UpdateUser = prisma.conference.update({
    where: Criteria,
    data: UserData,
  });
}

async function deleteUser(Criteria) {
  const DeleteUser = prisma.conference.delete({
    where: Criteria,
  });
}

async function assignRole(userId, role) {
  const result =
    await prisma.$queryRaw`UPDATE emailpassword_users SET role = ${role} WHERE user_id = ${userId}`;
  console.log(result);
}
async function getRoleByUserId(userId) {
  // const role =
  // await prisma.$queryRaw`SELECT role FROM emailpassword_users WHERE user_id = ${userId}`;
  // return role[0].role;
  const user = await prisma.emailpassword_users.findUnique({
    where: {
      user_id: userId,
    },
  });
  console.log(user);
  return user.role;
}

async function getFullNameByUserIdAndRole(userId, role) {
  if (role === "teacher") {
    const teacher = await prisma.teacher.findUnique({
      where: {
        user_id: userId,
      },
    });
    return teacher.fullName;
  }
  if (role === "student") {
    const student = await prisma.student.findUnique({
      where: {
        user_id: userId,
      },
    });
    return student.fullName;
  }

  return null;
}

async function getTeachers() {
  const teachers = await prisma.teacher.findMany();
  return teachers;
}

async function getTeacherById(Criteria) {
  const teacher = await prisma.teacher.findUnique({
    where: Criteria,
    include: {
      account: {
        select: {
          email: true,
        },
      },
    },
  });
  teacher.email = teacher.account.email;
  delete teacher.account;
  return teacher;
}
async function getTeachersDetailled() {
  const teachers = await prisma.teacher.findMany({
    include: {
      account: true,
      account: {
        select: {
          email: true,
        },
      },
      courses: true,

      courses: {
        select: {
          id: true,
          name: true,
          class: true,
          class: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
  teachers.forEach((teacher) => {
    teacher.email = teacher.account.email;
    delete teacher.account;
  });
  return teachers;
}
async function createTeacher(formFields, userId) {
  const teacher = {
    firstName: formFields.filter((f) => f.id === "firstName")[0].value,
    lastName: formFields.filter((f) => f.id === "lastName")[0].value,
    email: formFields.filter((f) => f.id === "email")[0].value,
    phone: formFields.filter((f) => f.id === "phone")[0].value,
    address: formFields.filter((f) => f.id === "address")[0].value,
    courses: formFields.filter((f) => f.id === "courses")[0].value,
  };
  const createdTeacher = await prisma.teacher.create({
    data: {
      firstName: teacher.firstName,
      lastName: teacher.lastName,
      fullName: teacher.firstName + " " + teacher.lastName,
      phone: teacher.phone,
      address: teacher.address,
      courses: {
        connect:
          teacher.courses.length != 0
            ? teacher.courses.map((courseId) => ({ id: courseId }))
            : [],
      },
      account: {
        connect: {
          user_id: userId,
        },
      },
    },
    include: {
      account: true,
      account: {
        select: {
          email: true,
        },
      },
      courses: true,
      courses: {
        select: {
          id: true,
          name: true,
          class: true,
          class: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
  createdTeacher.email = createdTeacher.account.email;
  delete createdTeacher.account;
  return createdTeacher;
}
async function updateTeacher(criteria, userData) {
  let email = userData.email;
  delete userData.email;
  // const dataWithoutCourses = (({ courses, ...rest }) => rest)(userData);
  const updatedTeacher = await prisma.teacher.update({
    where: criteria,
    data: {
      ...userData,
      courses: {
        connect: userData.courses.map((courseId) => ({ id: courseId })),
      },
    },
    include: {
      account: true,
      account: {
        select: {
          email: true,
        },
      },
      courses: true,
      courses: {
        select: {
          id: true,
          name: true,
          class: true,
          class: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
  updatedTeacher.email = updatedTeacher.account.email;
  delete updatedTeacher.account;
  return updatedTeacher;
}
async function deleteTeacher(Criteria) {
  const deletedTeacher = await prisma.teacher.delete({
    where: Criteria,
  });
}

//******************************************************************************* */

async function getStudents() {
  const students = await prisma.student.findMany();
  return students;
}

async function getStudentById(Criteria) {
  const student = await prisma.student.findUnique({
    where: Criteria,
    include: {
      account: {
        select: {
          email: true,
        },
      },
    },
  });
  student.email = student.account.email;
  delete student.account;
  return student;
}
async function getStudentsDetailled() {
  const students = await prisma.student.findMany({
    include: {
      account: true,
      account: {
        select: {
          email: true,
        },
      },
      class: true,
      class: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  });
  students.forEach((student) => {
    student.email = student.account.email;
    delete student.account;
  });
  return students;
}
async function createStudent(formFields, userId) {
  const student = {
    firstName: formFields.filter((f) => f.id === "firstName")[0].value,
    lastName: formFields.filter((f) => f.id === "lastName")[0].value,
    email: formFields.filter((f) => f.id === "email")[0].value,
    phone: formFields.filter((f) => f.id === "phone")[0].value,
    address: formFields.filter((f) => f.id === "address")[0].value,
    class: formFields.filter((f) => f.id === "class")[0].value,
  };
  const createdStudent = await prisma.student.create({
    data: {
      firstName: student.firstName,
      lastName: student.lastName,
      fullName: student.firstName + " " + student.lastName,
      phone: student.phone,
      address: student.address,
      class: {
        connect: {
          id: student.class,
        },
      },
      account: {
        connect: {
          user_id: userId,
        },
      },
    },
    include: {
      account: true,
      account: {
        select: {
          email: true,
        },
      },
      class: true,
    },
  });
  createdStudent.email = createdStudent.account.email;
  delete createdStudent.account;
  return createdStudent;
}
async function updateStudent(criteria, userData) {
  let email = userData.email;
  delete userData.email;
  // const dataWithoutCourses = (({ courses, ...rest }) => rest)(userData);
  console.log(userData);
  const updatedStudent = await prisma.student.update({
    where: criteria,
    data: {
      firstName: userData.firstName,
      lastName: userData.lastName,
      fullName: userData.firstName + " " + userData.lastName,
      phone: userData.phone,
      address: userData.address,
      class: {
        connect: {
          id: userData.class,
        },
      },
    },
    include: {
      account: true,
      account: {
        select: {
          email: true,
        },
      },
      class: true,
    },
  });
  updatedStudent.email = updatedStudent.account.email;
  delete updatedStudent.account;
  return updatedStudent;
}
async function deleteStudent(Criteria) {
  const deletedStudent = await prisma.student.delete({
    where: Criteria,
  });
}
async function sendEmail() {
  let testAccount = await nodemailer.createTestAccount();
  console.log(testAccount);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
  console.log(transporter);
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "hamma.amara@gmail.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
module.exports.getUser = getUser;
module.exports.getAllUsers = getAllUsers;
module.exports.addUser = addUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.assignRole = assignRole;
module.exports.getRoleByUserId = getRoleByUserId;
module.exports.getFullNameByUserIdAndRole = getFullNameByUserIdAndRole;

module.exports.getTeachers = getTeachers;
module.exports.getTeachersDetailled = getTeachersDetailled;
module.exports.createTeacher = createTeacher;
module.exports.updateTeacher = updateTeacher;
module.exports.deleteTeacher = deleteTeacher;

module.exports.getStudents = getStudents;
module.exports.getStudentsDetailled = getStudentsDetailled;
module.exports.createStudent = createStudent;
module.exports.updateStudent = updateStudent;
module.exports.deleteStudent = deleteStudent;
module.exports.sendEmail = sendEmail;
