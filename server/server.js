const express = require("express");
const app = express();
const cors = require("cors");

const supertokens = require("supertokens-node");
const Session = require("supertokens-node/recipe/session");
const EmailPassword = require("supertokens-node/recipe/emailpassword");

const errorHandler = require("supertokens-node/framework/express").errorHandler;
const middleware = require("supertokens-node/framework/express").middleware;

require("dotenv").config();

supertokens.init({
  framework: "express",
  supertokens: {
    // try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
    connectionURI: "http://localhost:3567",
    // apiKey: "IF YOU HAVE AN API KEY FOR THE CORE, ADD IT HERE",
  },
  appInfo: {
    // learn more about this on https://supertokens.com/docs/session/appinfo
    appName: "awesome app",
    websiteDomain: "http://localhost:3000",
    apiDomain: "http://localhost:5000",
    apiBasePath: "api/v1/auth",
    //  websiteBasePath: "http://localhost:3000",
  },
  recipeList: [EmailPassword.init(), Session.init()],
});

app.use(
  cors({
    origin: ["http://localhost:5000", "http://localhost:3000"],
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

const courses = require("./routes/api/coursesRoute");
const subjects = require("./routes/api/subjectsRoute");
const posts = require("./routes/api/postsRoute");
const materials = require("./routes/api/materialsRoute");
const exercices = require("./routes/api/exercicesRoute");
const attachements = require("./routes/api/attachementsRoute");

app.use("/api/v1/courses", courses);
app.use("/api/v1/subjects", subjects);
app.use("/api/v1/posts", posts);
app.use("/api/v1/materials", materials);
app.use("/api/v1/exercices", exercices);
app.use("/api/v1/attachements", attachements);

app.use(errorHandler());

app.use(middleware());

app.listen(process.env.PORT || 5000, () => {
  console.log(`Started listening on http://localhost:5000`);
});
