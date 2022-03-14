const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const courses = require("./routes/api/courses");
const subjects = require("./routes/api/subjects");

app.use("/api/v1/courses", courses);
app.use("/api/v1/subjects", subjects);

app.listen(process.env.PORT || 5000, () => {
  console.log("server has started on port 5000");
});
