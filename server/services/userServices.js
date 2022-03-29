const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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
  const CreateUser = await prisma.conference.create({ data: User });
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

  return result;
}
async function getRoleByUserId(userId) {
  const role =
    await prisma.$queryRaw`SELECT role FROM emailpassword_users WHERE user_id = ${userId}`;
  return role[0].role;
}

module.exports.getUser = getUser;
module.exports.getAllUsers = getAllUsers;
module.exports.addUser = addUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.assignRole = assignRole;
module.exports.getRoleByUserId = getRoleByUserId;
