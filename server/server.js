const StudentRoute = require("./Routes/API/Student.route.js");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require("express");
const app = express();
const cors = require("cors");
const client = require("./db/db")
const bcrypt = require('bcrypt');
require('dotenv').config();



app.use(cors());
app.use(express.json());
app.use('/student', StudentRoute)

app.listen(process.env.PORT || 5000 , () => {
    console.log("server has started on port 5000");

})

