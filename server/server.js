const queries = require("./Queries.js");
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

app.listen(process.env.PORT || 5000 , () => {
    console.log("server has started on port 5000");

})

app.get('/student', async (req, res)=>{
    const Student = await queries.getStudent({id : req.body.id});
    res.json(Student)
});

app.get('/courses', async(req, res)=>{
    const Courses = await queries.getCoursesByCriteria({classId : req.body.classId});
    res.json(Courses);
})

app.get('/course', async(req, res)=>{
    const courseposts = await queries.getPostsByCriteria({courseId : req.body.courseId}, {PostAttachement : true});
    res.json(courseposts);
})

app.get('/assignments', async(req, res)=>{
    const courseassignments = await queries.getAssignmentsByCriteria({courseId : req.body.courseId}, {AssignmentAttachement : true, AssignmentSubmission : true});
    res.json(courseposts);
})