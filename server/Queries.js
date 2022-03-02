import { PrismaClient } from '@prisma/client';

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

async function addStudent(Student){
    const CreateStudent = await prisma.student.create({data : Student});
}

async function updateStudent(Criteria,StudentData){
    const UpdateStudent = prisma.student.update({
        where : Criteria,
        data : StudentData
    });
}

async function deleteStudent(Criteria){
    const DeleteStudent = prisma.student.delete({
        where : Criteria
    });
}

async function getTeacher(Criteria){
    const Teacher = await prisma.teacher.findUnique({
        where : Criteria
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

async function updateTeacher(Criteria,TeacherData){
    const UpdateTeacher = prisma.teacher.update({
        where : Criteria,
        data : TeacherData
    });
}

async function deleteTeacher(Criteria){
    const DeleteTeacher = prisma.teacher.delete({
        where : Criteria
    });
}

 async function getCourse(Criteria){
    const course = await prisma.course.findUnique({
        where : Criteria
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

async function updateCourse(Criteria,CourseData){
    const UpdateCourse = prisma.course.update({
        where : Criteria,
        data : CourseData
    });
}

async function deleteCourse(Criteria){
    const DeleteCourse = prisma.course.delete({
        where : Criteria
    });
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

async function addSubject(Subject){
    const CreateSubject = await prisma.subject.create({data : Subject});
}

async function updateSubject(Criteria,SubjectData){
    const updateSubject = prisma.subject.update({
        where : Criteria,
        data : SubjectData
    });
}

async function deleteSubject(Criteria){
    const DeleteSubject = prisma.subject.delete({
        where : Criteria
    });
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

async function getAdmin(Criteria){
    const Admin = await prisma.Admin.findUnique({
        where : Criteria
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

async function updateAdmin(Criteria, AdminData){
    const UpdateAdmin = prisma.admin.update({
        where : Criteria,
        data : AdminData
    });
}

async function deleteAdmin(Criteria){
    const DeleteAdmin = prisma.admin.delete({
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

async function addAnnouncement(Annoucement){
    const CreateAnnouncement = await prisma.announcements.create({data : Annoucement});
}

async function updateAnnouncement(Criteria,AnnouncementData){
    const UpdateStudent = prisma.announcements.update({
        where : Criteria,
        data : AnnouncementData
    });
}

async function deleteAnnouncement(Criteria){
    const DeleteAnnouncement = prisma.announcements.delete({
        where : Criteria
    });
}

async function getAccount(Criteria){
    const Account = await prisma.account.findUnique({
        where : Criteria
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

async function updateAccount(Criteria,AccountData){
    const UpdateAccount = prisma.account.update({
        where : Criteria,
        data : AccountData
    });
}

async function deleteAccount(Criteria){
    const DeleteAccount = prisma.account.delete({
        where : Criteria
    });
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

async function addAttendance(Attendance){
    const CreateAttendance = await prisma.studentattendance.create({data : Attendance});
}

async function updateAttendance(Criteria, AttendanceData){
    const UpdateStudent = prisma.studentattendance.update({
        where : Criteria,
        data : AttendanceData
    });
}

async function deleteAttendance(Criteria){
    const DeleteAttendance = prisma.studentattendance.delete({
        where : Criteria
    });
}