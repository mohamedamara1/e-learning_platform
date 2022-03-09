const queries = require('/E-learning platform/e-learning_platform/server/Queries/Student/StudentQueries');
const express = require('express');
const router = express.Router();


router.get('/student', async (req, res)=>{
    const Student = await queries.getStudent({id : req.body.id});
    res.json(Student)
});

router.get('/courses', async(req, res)=>{
    const Courses = await queries.getCoursesByCriteria({classId : req.body.classId});
    res.json(Courses);
})

router.get('/course', async(req, res)=>{
    const courseposts = await queries.getPostsByCriteria({courseId : req.body.courseId}, {PostAttachement : true});
    res.json(courseposts);
})

router.get('/assignments', async(req, res)=>{
    const courseassignments = await queries.getAssignmentsByCriteria({courseId : req.body.courseId}, {AssignmentAttachement : true, AssignmentSubmission : true});
    res.json(courseassignments);
})

module.exports = router
