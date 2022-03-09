const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getStudent(Criteria){
    const Student = await prisma.student.findUnique({
        where : Criteria
    });
    return Student;
}

async function getAllStudents(){
    const Students = await prisma.student.findMany();
    return Students;
}

async function getTeacher(Criteria){
    const Teacher = await prisma.teacher.findUnique({
        where : Criteria
    });
    return Teacher;
}

async function getCourse(Criteria){
    const course = await prisma.course.findUnique({
        where : Criteria
    });
    return course;
}

async function getCoursesByCriteria(Criteria){
    const Courses = await prisma.course.findMany({
        where : Criteria
    });
    return Courses;
}

async function getAllCourses(){
    const Courses = await prisma.course.findMany();
    return Courses;
}

async function getAssignment(Criteria){
    const Assignment = await prisma.assignment.findUnique({
        where : Criteria
    });
    return Assignment;
}

async function getAllAssignments(){
    const Assignments = await prisma.assignment.findMany();
    return Assignments;
}

async function getAssignmentsByCriteria(Criteria, Includes){
    const Assignments = await prisma.assignment.findMany({
        where : Criteria,
        include : Includes
    })
    return Assignments
}

async function getSubject(Criteria){
    const Subject = await prisma.subject.findUnique({
        where : Criteria
    });
    return Subject;
}

async function getAllSubjects(){
    const Subjects = await prisma.subject.findMany();
    return Subjects;
}

async function getCourseMaterial(Criteria){
     const Material = await prisma.coursematerial.findUnique({
         where : Criteria
     });
     return Material;
 }

async function getAllMaterials(){
    const Materials = await prisma.coursematerial.findMany();
    return Materials;
}

async function getAttachement(Criteria){
    const Attachement = await prisma.attachment.findUnique({
        where : Criteria
    });
    return Attachement;
}

async function getAllAttachements(){
    const Attachements = await prisma.attachment.findMany();
    return Attachements;
}

async function getAttachementsByCriteria(Criteria){
    const Attachements = await prisma.attachment.findMany({
        where : Criteria
    });
    return Attachements;   
}

async function getConference(Criteria){
    const Conference = await prisma.conference.findUnique({
        where : Criteria
    });
    return Conference;
}

async function getAllConferences(){
    const Conferences = await prisma.conference.findMany();
    return Conferences;
}

async function getAssignmentSubmission(Criteria){
    const AssignmentSubmission = await prisma.assignmentsubmission.findUnique({
        where : Criteria
    });
    return AssignmentSubmission;
}

async function getAllSubmissions(){
    const Submissions = await prisma.assignmentsubmission.findMany();
    return Submissions;
}

async function addSubmission(Submission){
    const CreateSubmission = await prisma.assignmentsubmission.create({data : Submission});
}

async function updateSubmission(Criteria,SubmissionData){
    const UpdateSubmission = prisma.assignmentsubmission.update({
        where : Criteria,
        data : SubmissionData
    });
}

async function deleteSubmission(Criteria){
    const DeleteSubmission = prisma.assignmentsubmission.delete({
        where : Criteria
    });
}

async function getPost(Criteria){
    const Post = await prisma.teacherpost.findUnique({
        where : Criteria
    });
    return Post;
}

async function getAllPosts(){
    const Posts = await prisma.teacherpost.findMany();
    return Posts;
}

async function getPostsByCriteria(Criteria, includes){
    const Posts = await prisma.teacherPost.findMany({
        where : Criteria,
        include : includes
    });
    return Posts
}

async function getAnnouncements(Criteria){
    const Annoucement = await prisma.announcements.findUnique({
        where : Criteria
    });
    return Annoucement;
}

async function getAllAnnouncements(){
    const Announcements = await prisma.announcements.findMany();
    return Announcements;
}

async function getAttendance(Criteria){
    const Attendance = await prisma.studentattendance.findUnique({
        where : Criteria
    });
    return Attendance;
}

async function getAllAttendances(){
    const Attendances = await prisma.studentattendance.findMany();
    return Attendances;
}



module.exports.getStudent = getStudent;
module.exports.getAllStudents = getAllStudents;
module.exports.getTeacher = getTeacher;
module.exports.getCourse = getCourse;
module.exports.getCoursesByCriteria = getCoursesByCriteria;
module.exports.getAllCourses = getAllCourses;
module.exports.getAssignment = getAssignment;
module.exports.getAllAssignments = getAllAssignments;
module.exports.getAssignmentsByCriteria = getAssignmentsByCriteria;      
module.exports.getSubject = getSubject;
module.exports.getAllSubjects = getAllSubjects;
module.exports.getCourseMaterial = getCourseMaterial;
module.exports.getAllMaterials = getAllMaterials;
module.exports.getAttachement = getAttachement;
module.exports.getAllAttachements = getAllAttachements;
module.exports.getAttachementsByCriteria = getAttachementsByCriteria;    
module.exports.getConference = getConference;
module.exports.getAllConferences = getAllConferences;
module.exports.getAssignmentSubmission = getAssignmentSubmission;        
module.exports.getAllSubmissions = getAllSubmissions;
module.exports.addSubmission = addSubmission;
module.exports.updateSubmission = updateSubmission;
module.exports.deleteSubmission = deleteSubmission;
module.exports.getPost = getPost;
module.exports.getAllPosts = getAllPosts;
module.exports.getPostsByCriteria = getPostsByCriteria;
module.exports.getAnnouncements = getAnnouncements;
module.exports.getAllAnnouncements = getAllAnnouncements;
module.exports.getAttendance = getAttendance;
module.exports.getAllAttendances = getAllAttendances;