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

async function addAssignment(Assignment){
    const CreateAssignment = await prisma.assignment.create({data : Assignment});
}

async function updateAssignment(Criteria,AssignmentData){
    const updateAssignment = prisma.assignment.update({
        where : Criteria,
        data : AssignmentData
    });
}

async function deleteAssignment(Criteria){
    const DeleteAssignment = prisma.assignment.delete({
        where : Criteria
    });
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

async function addMaterial(Material){
    const CreateMaterial = await prisma.coursematerial.create({data : Material});
}

async function updateMaterial(Criteria,MaterialData){
    const UpdateMaterial = prisma.coursematerial.update({
        where : Criteria,
        data : MaterialData
    });
}

async function deleteMaterial(Criteria){
    const DeleteMaterial = prisma.coursematerial.delete({
        where : Criteria
    });
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

async function addAttachement(Attachement){
    const CreateAttachement = await prisma.attachment.create({data : Attachement});
}

async function updateAttachement(Criteria,AttachementData){
    const UpdateAttachement = prisma.attachment.update({
        where : Criteria,
        data : AttachementData
    });
}

async function deleteAttachement(Criteria){
    const DeleteAttachement = prisma.attachment.delete({
        where : Criteria
    });
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

async function addConference(Conference){
    const CreateConference = await prisma.conference.create({data : Conference});
}

async function updateConference(Criteria,ConferenceData){
    const UpdateConference = prisma.conference.update({
        where : Criteria,
        data : ConferenceData
    });
}

async function deleteConference(Criteria){
    const DeleteConference = prisma.conference.delete({
        where : Criteria
    });
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

async function addPost(Post){
    const CreatePost = await prisma.teacherpost.create({data : Post});
}

async function updatePost(Criteria,PostData){
    const UpdatePost = prisma.teacherpost.update({
        where : Criteria,
        data : PostData
    });
}

async function deletePost(Criteria){
    const DeletePost = prisma.teacherpost.delete({
        where : Criteria
    });
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
module.exports.addAssignment = addAssignment;
module.exports.updateAssignment = updateAssignment;
module.exports.deleteAssignment = deleteAssignment;
module.exports.getSubject = getSubject;
module.exports.getAllSubjects = getAllSubjects;
module.exports.getCourseMaterial = getCourseMaterial;
module.exports.getAllMaterials = getAllMaterials;
module.exports.addMaterial = addMaterial;
module.exports.updateMaterial = updateMaterial;
module.exports.deleteMaterial = deleteMaterial;
module.exports.getAttachement = getAttachement;
module.exports.getAllAttachements = getAllAttachements;
module.exports.getAttachementsByCriteria = getAttachementsByCriteria;    
module.exports.addAttachement = addAttachement;
module.exports.updateAttachement = updateAttachement;
module.exports.deleteAttachement = deleteAttachement;
module.exports.getConference = getConference;
module.exports.getAllConferences = getAllConferences;
module.exports.addConference = addConference;
module.exports.updateConference = updateConference;
module.exports.deleteConference = deleteConference;
module.exports.getAssignmentSubmission = getAssignmentSubmission;        
module.exports.getAllSubmissions = getAllSubmissions;
module.exports.getPost = getPost;
module.exports.getAllPosts = getAllPosts;
module.exports.getPostsByCriteria = getPostsByCriteria;
module.exports.addPost = addPost;
module.exports.updatePost = updatePost;
module.exports.deletePost = deletePost;
module.exports.getAnnouncements = getAnnouncements;
module.exports.getAllAnnouncements = getAllAnnouncements;
module.exports.getAttendance = getAttendance;
module.exports.getAllAttendances = getAllAttendances;
