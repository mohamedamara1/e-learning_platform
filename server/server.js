const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const courses = require("./routes/api/coursesRoute");
const subjects = require("./routes/api/subjectsRoute");
//const posts = require("./routes/api/postsRoute");

app.use("/api/v1/courses", courses);
app.use("/api/v1/subjects", subjects);
//app.use("/api/v1/posts", posts);

app.listen(process.env.PORT || 5000, () => {
  console.log("server has started on port 5000");
});
