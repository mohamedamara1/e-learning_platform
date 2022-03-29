/*
  Warnings:

  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `AdminAccount` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Announcements` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `AssignmentSubmission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Attachement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Class` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Conference` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CourseMaterial` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Exercice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ExerciceAttachement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `MaterialAttachement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `MaterialUnit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PostAttachement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PracticeUnit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Student` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `StudentAccount` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `StudentAttendance` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Subject` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SubmissionAttachement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Teacher` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `TeacherAccount` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "AdminAccount" DROP CONSTRAINT "AdminAccount_accountId_fkey";

-- DropForeignKey
ALTER TABLE "AdminAccount" DROP CONSTRAINT "AdminAccount_adminId_fkey";

-- DropForeignKey
ALTER TABLE "Announcements" DROP CONSTRAINT "Announcements_adminId_fkey";

-- DropForeignKey
ALTER TABLE "AssignmentSubmission" DROP CONSTRAINT "AssignmentSubmission_exerciceId_fkey";

-- DropForeignKey
ALTER TABLE "AssignmentSubmission" DROP CONSTRAINT "AssignmentSubmission_studentId_fkey";

-- DropForeignKey
ALTER TABLE "Conference" DROP CONSTRAINT "Conference_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_classId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_subjectId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "CourseMaterial" DROP CONSTRAINT "CourseMaterial_materialUnitId_fkey";

-- DropForeignKey
ALTER TABLE "Exercice" DROP CONSTRAINT "Exercice_practiceUnitId_fkey";

-- DropForeignKey
ALTER TABLE "ExerciceAttachement" DROP CONSTRAINT "ExerciceAttachement_attachementId_fkey";

-- DropForeignKey
ALTER TABLE "ExerciceAttachement" DROP CONSTRAINT "ExerciceAttachement_exerciceId_fkey";

-- DropForeignKey
ALTER TABLE "MaterialAttachement" DROP CONSTRAINT "MaterialAttachement_attachementId_fkey";

-- DropForeignKey
ALTER TABLE "MaterialAttachement" DROP CONSTRAINT "MaterialAttachement_materialId_fkey";

-- DropForeignKey
ALTER TABLE "MaterialUnit" DROP CONSTRAINT "MaterialUnit_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_courseId_fkey";

-- DropForeignKey
ALTER TABLE "PostAttachement" DROP CONSTRAINT "PostAttachement_attachementId_fkey";

-- DropForeignKey
ALTER TABLE "PostAttachement" DROP CONSTRAINT "PostAttachement_postId_fkey";

-- DropForeignKey
ALTER TABLE "PracticeUnit" DROP CONSTRAINT "PracticeUnit_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_classId_fkey";

-- DropForeignKey
ALTER TABLE "StudentAccount" DROP CONSTRAINT "StudentAccount_accountId_fkey";

-- DropForeignKey
ALTER TABLE "StudentAccount" DROP CONSTRAINT "StudentAccount_studentId_fkey";

-- DropForeignKey
ALTER TABLE "StudentAttendance" DROP CONSTRAINT "StudentAttendance_conferenceId_fkey";

-- DropForeignKey
ALTER TABLE "StudentAttendance" DROP CONSTRAINT "StudentAttendance_studentId_fkey";

-- DropForeignKey
ALTER TABLE "SubmissionAttachement" DROP CONSTRAINT "SubmissionAttachement_attachementId_fkey";

-- DropForeignKey
ALTER TABLE "SubmissionAttachement" DROP CONSTRAINT "SubmissionAttachement_submissionId_fkey";

-- DropForeignKey
ALTER TABLE "TeacherAccount" DROP CONSTRAINT "TeacherAccount_accountId_fkey";

-- DropForeignKey
ALTER TABLE "TeacherAccount" DROP CONSTRAINT "TeacherAccount_teacherId_fkey";

-- AlterTable
ALTER TABLE "Account" DROP CONSTRAINT "Account_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Account_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Account_id_seq";

-- AlterTable
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Admin_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Admin_id_seq";

-- AlterTable
ALTER TABLE "AdminAccount" DROP CONSTRAINT "AdminAccount_pkey",
ALTER COLUMN "adminId" SET DATA TYPE TEXT,
ALTER COLUMN "accountId" SET DATA TYPE TEXT,
ADD CONSTRAINT "AdminAccount_pkey" PRIMARY KEY ("adminId", "accountId");

-- AlterTable
ALTER TABLE "Announcements" DROP CONSTRAINT "Announcements_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "adminId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Announcements_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Announcements_id_seq";

-- AlterTable
ALTER TABLE "AssignmentSubmission" DROP CONSTRAINT "AssignmentSubmission_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "studentId" SET DATA TYPE TEXT,
ALTER COLUMN "exerciceId" SET DATA TYPE TEXT,
ADD CONSTRAINT "AssignmentSubmission_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "AssignmentSubmission_id_seq";

-- AlterTable
ALTER TABLE "Attachement" DROP CONSTRAINT "Attachement_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Attachement_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Attachement_id_seq";

-- AlterTable
ALTER TABLE "Class" DROP CONSTRAINT "Class_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Class_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Class_id_seq";

-- AlterTable
ALTER TABLE "Conference" DROP CONSTRAINT "Conference_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "courseId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Conference_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Conference_id_seq";

-- AlterTable
ALTER TABLE "Course" DROP CONSTRAINT "Course_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "teacherId" SET DATA TYPE TEXT,
ALTER COLUMN "classId" SET DATA TYPE TEXT,
ALTER COLUMN "subjectId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Course_id_seq";

-- AlterTable
ALTER TABLE "CourseMaterial" DROP CONSTRAINT "CourseMaterial_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "materialUnitId" SET DATA TYPE TEXT,
ADD CONSTRAINT "CourseMaterial_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "CourseMaterial_id_seq";

-- AlterTable
ALTER TABLE "Exercice" DROP CONSTRAINT "Exercice_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "practiceUnitId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Exercice_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Exercice_id_seq";

-- AlterTable
ALTER TABLE "ExerciceAttachement" DROP CONSTRAINT "ExerciceAttachement_pkey",
ALTER COLUMN "exerciceId" SET DATA TYPE TEXT,
ALTER COLUMN "attachementId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ExerciceAttachement_pkey" PRIMARY KEY ("exerciceId", "attachementId");

-- AlterTable
ALTER TABLE "MaterialAttachement" DROP CONSTRAINT "MaterialAttachement_pkey",
ALTER COLUMN "materialId" SET DATA TYPE TEXT,
ALTER COLUMN "attachementId" SET DATA TYPE TEXT,
ADD CONSTRAINT "MaterialAttachement_pkey" PRIMARY KEY ("materialId", "attachementId");

-- AlterTable
ALTER TABLE "MaterialUnit" DROP CONSTRAINT "MaterialUnit_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "courseId" SET DATA TYPE TEXT,
ADD CONSTRAINT "MaterialUnit_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "MaterialUnit_id_seq";

-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "courseId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Post_id_seq";

-- AlterTable
ALTER TABLE "PostAttachement" DROP CONSTRAINT "PostAttachement_pkey",
ALTER COLUMN "postId" SET DATA TYPE TEXT,
ALTER COLUMN "attachementId" SET DATA TYPE TEXT,
ADD CONSTRAINT "PostAttachement_pkey" PRIMARY KEY ("postId", "attachementId");

-- AlterTable
ALTER TABLE "PracticeUnit" DROP CONSTRAINT "PracticeUnit_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "courseId" SET DATA TYPE TEXT,
ADD CONSTRAINT "PracticeUnit_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "PracticeUnit_id_seq";

-- AlterTable
ALTER TABLE "Student" DROP CONSTRAINT "Student_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "classId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Student_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Student_id_seq";

-- AlterTable
ALTER TABLE "StudentAccount" DROP CONSTRAINT "StudentAccount_pkey",
ALTER COLUMN "studentId" SET DATA TYPE TEXT,
ALTER COLUMN "accountId" SET DATA TYPE TEXT,
ADD CONSTRAINT "StudentAccount_pkey" PRIMARY KEY ("studentId", "accountId");

-- AlterTable
ALTER TABLE "StudentAttendance" DROP CONSTRAINT "StudentAttendance_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "studentId" SET DATA TYPE TEXT,
ALTER COLUMN "conferenceId" SET DATA TYPE TEXT,
ADD CONSTRAINT "StudentAttendance_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "StudentAttendance_id_seq";

-- AlterTable
ALTER TABLE "Subject" DROP CONSTRAINT "Subject_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Subject_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Subject_id_seq";

-- AlterTable
ALTER TABLE "SubmissionAttachement" DROP CONSTRAINT "SubmissionAttachement_pkey",
ALTER COLUMN "submissionId" SET DATA TYPE TEXT,
ALTER COLUMN "attachementId" SET DATA TYPE TEXT,
ADD CONSTRAINT "SubmissionAttachement_pkey" PRIMARY KEY ("submissionId", "attachementId");

-- AlterTable
ALTER TABLE "Teacher" DROP CONSTRAINT "Teacher_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Teacher_id_seq";

-- AlterTable
ALTER TABLE "TeacherAccount" DROP CONSTRAINT "TeacherAccount_pkey",
ALTER COLUMN "teacherId" SET DATA TYPE TEXT,
ALTER COLUMN "accountId" SET DATA TYPE TEXT,
ADD CONSTRAINT "TeacherAccount_pkey" PRIMARY KEY ("teacherId", "accountId");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercice" ADD CONSTRAINT "Exercice_practiceUnitId_fkey" FOREIGN KEY ("practiceUnitId") REFERENCES "PracticeUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PracticeUnit" ADD CONSTRAINT "PracticeUnit_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseMaterial" ADD CONSTRAINT "CourseMaterial_materialUnitId_fkey" FOREIGN KEY ("materialUnitId") REFERENCES "MaterialUnit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialUnit" ADD CONSTRAINT "MaterialUnit_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conference" ADD CONSTRAINT "Conference_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssignmentSubmission" ADD CONSTRAINT "AssignmentSubmission_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssignmentSubmission" ADD CONSTRAINT "AssignmentSubmission_exerciceId_fkey" FOREIGN KEY ("exerciceId") REFERENCES "Exercice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcements" ADD CONSTRAINT "Announcements_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentAttendance" ADD CONSTRAINT "StudentAttendance_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentAttendance" ADD CONSTRAINT "StudentAttendance_conferenceId_fkey" FOREIGN KEY ("conferenceId") REFERENCES "Conference"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciceAttachement" ADD CONSTRAINT "ExerciceAttachement_exerciceId_fkey" FOREIGN KEY ("exerciceId") REFERENCES "Exercice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciceAttachement" ADD CONSTRAINT "ExerciceAttachement_attachementId_fkey" FOREIGN KEY ("attachementId") REFERENCES "Attachement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostAttachement" ADD CONSTRAINT "PostAttachement_attachementId_fkey" FOREIGN KEY ("attachementId") REFERENCES "Attachement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostAttachement" ADD CONSTRAINT "PostAttachement_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialAttachement" ADD CONSTRAINT "MaterialAttachement_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "CourseMaterial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialAttachement" ADD CONSTRAINT "MaterialAttachement_attachementId_fkey" FOREIGN KEY ("attachementId") REFERENCES "Attachement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubmissionAttachement" ADD CONSTRAINT "SubmissionAttachement_attachementId_fkey" FOREIGN KEY ("attachementId") REFERENCES "Attachement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubmissionAttachement" ADD CONSTRAINT "SubmissionAttachement_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "AssignmentSubmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminAccount" ADD CONSTRAINT "AdminAccount_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminAccount" ADD CONSTRAINT "AdminAccount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherAccount" ADD CONSTRAINT "TeacherAccount_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherAccount" ADD CONSTRAINT "TeacherAccount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentAccount" ADD CONSTRAINT "StudentAccount_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentAccount" ADD CONSTRAINT "StudentAccount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
