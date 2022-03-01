import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function getStudentById(Id){
    const Student = await prisma.student.findUnique({
        where : {id : Id}
    });
    return Student;
}

async function getAllStudents(){
    const Students = await prisma.student.findMany();
    return Students;
}

async function addStudent(Student){
    const CreateStudent = await prisma.student.create({data : Student});
}

async function getTeacherById(Id){
    const Teacher = await prisma.teacher.findUnique({
        where : {id : Id}
    });
    return Teacher;
}

async function getAllTeachers(){
    const Teachers = await prisma.teacher.findMany();
    return Teachers;
}

async function addTeacher(Teacher){
    const CreateTeacher = await prisma.teacher.create({data : Teacher});
}

 async function getCourseById(Id){
    const course = await prisma.course.findUnique({
        where : {id : Id}
    });
    return course;
}

async function getAllCourses(){
    const Courses = await prisma.course.findMany();
    return Courses;
}

async function addCourse(Course){
    const CreateCourse = await prisma.course.create({data : Course});
}

async function getAssignmentById(Id){
    const Assignment = await prisma.assignment.findUnique({
        where : {id : Id}
    });
    return Assignment;
}

async function getAllAssignments(){
    const Assignments = await prisma.assignment.findMany();
    return Assignments;
}

async function addAssignment(Assignment){
    const CreateAssignment = await prisma.assignment.create({data : Assignment});
}

async function getSubjectById(Id){
    const Subject = await prisma.subject.findUnique({
        where : {id : Id}
    });
    return Subject;
}

async function getAllSubjects(){
    const Subjects = await prisma.subject.findMany();
    return Subjects;
}

async function addSubject(Subject){
    const CreateSubject = await prisma.subject.create({data : Subject});
}

async function getCourseMaterialById(Id){
     const Material = await prisma.coursematerial.findUnique({
         where : {id : Id}
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

async function getAttachementById(Id){
    const Attachement = await prisma.attachment.findUnique({
        where : {id : Id}
    });
    return Attachement;
}

async function getAllAttachements(){
    const Attachements = await prisma.attachment.findMany();
    return Attachements;
}

async function addAttachement(Attachement){
    const CreateAttachement = await prisma.attachment.create({data : Attachement});
}

async function getConferenceById(Id){
    const Conference = await prisma.conference.findUnique({
        where : {id : Id}
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

async function getAssignmentSubmissionById(Id){
    const AssignmentSubmission = await prisma.assignmentsubmission.findUnique({
        where : {id : Id}
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

async function getPostById(Id){
    const Post = await prisma.teacherpost.findUnique({
        where : {id : Id}
    });
    return Post;
}

async function getAllPosts(){
    const Posts = await prisma.teacherpost.findMany();
    return Posts;
}

async function addPost(Post){
    const CreatePost = await prisma.teacherpost.create({data : Post});
}

async function getAdminById(Id){
    const Admin = await prisma.Admin.findUnique({
        where : {id : Id}
    });
    return Admin;
}

async function getAllAdmins(){
    const Admins = await prisma.admin.findMany();
    return Admins;
}

async function addAdmin(Admin){
    const CreateAdmin = await prisma.Admin.create({data : Admin});
}

async function getAnnouncementsById(Id){
    const Annoucement = await prisma.announcements.findUnique({
        where : {id : Id}
    });
    return Annoucement;
}

async function getAllAnnouncements(){
    const Announcements = await prisma.announcements.findMany();
    return Announcements;
}

async function addAnnouncement(Annoucement){
    const CreateAnnouncement = await prisma.announcements.create({data : Annoucement});
}

async function getAccountById(Id){
    const Account = await prisma.account.findUnique({
        where : {id : Id}
    });
    return Account;
}

async function getAllAccounts(){
    const Accounts = await prisma.account.findMany();
    return Accounts;
}

async function addAccount(Account){
    const CreateAccount = await prisma.account.create({data : Account});
}

async function getAttendanceById(Id){
    const Attendance = await prisma.studentattendance.findUnique({
        where : {id : Id}
    });
    return Attendance;
}

async function getAllAttendances(){
    const Attendances = await prisma.studentattendance.findMany();
    return Attendances;
}

async function addAttendance(Attendance){
    const CreateAttendance = await prisma.studentattendance.create({data : Attendance});
}