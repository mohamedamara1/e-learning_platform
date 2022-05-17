import { faker } from "@faker-js/faker";
import { sample } from "lodash";
// utils

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: "mock url",
  name: faker.name.findName(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.phoneNumber(),
  /* isVerified: faker.datatype.boolean(),
  status: sample(["active", "banned"]),
  role: sample([
    "Leader",
    "Hr Manager",
    "UI Designer",
    "UX Designer",
    "UI/UX Designer",
    "Project Manager",
    "Backend Developer",
    "Full Stack Designer",
    "Front End Developer",
    "Full Stack Developer",
  ]),*/
}));

console.log(users);

export default users;
