/*
  Warnings:

  - You are about to drop the column `Password_salt` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `UserName` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `password_hash` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `relateduser_ID` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `FirstName` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `LastName` on the `Admin` table. All the data in the column will be lost.
  - The primary key for the `AdminAccount` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AccountId` on the `AdminAccount` table. All the data in the column will be lost.
  - You are about to drop the column `AdminId` on the `AdminAccount` table. All the data in the column will be lost.
  - You are about to drop the column `ExerciceId` on the `AssignmentSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `first_submission_timestamp` on the `AssignmentSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `latest_submission_timestamp` on the `AssignmentSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `submissions_count` on the `AssignmentSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Attachement` table. All the data in the column will be lost.
  - You are about to drop the column `scheduled_end_time` on the `Conference` table. All the data in the column will be lost.
  - You are about to drop the column `scheduled_start_time` on the `Conference` table. All the data in the column will be lost.
  - You are about to drop the column `file_type` on the `CourseMaterial` table. All the data in the column will be lost.
  - You are about to drop the column `deadline_datetime` on the `Exercice` table. All the data in the column will be lost.
  - You are about to drop the column `desription` on the `Exercice` table. All the data in the column will be lost.
  - The primary key for the `ExerciceAttachement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AttachementId` on the `ExerciceAttachement` table. All the data in the column will be lost.
  - You are about to drop the column `ExerciceId` on the `ExerciceAttachement` table. All the data in the column will be lost.
  - The primary key for the `MaterialAttachement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AttachementId` on the `MaterialAttachement` table. All the data in the column will be lost.
  - You are about to drop the column `MaterialId` on the `MaterialAttachement` table. All the data in the column will be lost.
  - You are about to drop the column `last_modified` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `publish_date` on the `Post` table. All the data in the column will be lost.
  - The primary key for the `PostAttachement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AttachementId` on the `PostAttachement` table. All the data in the column will be lost.
  - You are about to drop the column `PostId` on the `PostAttachement` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Student` table. All the data in the column will be lost.
  - The primary key for the `StudentAccount` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AccountId` on the `StudentAccount` table. All the data in the column will be lost.
  - You are about to drop the column `StudentId` on the `StudentAccount` table. All the data in the column will be lost.
  - The primary key for the `SubmissionAttachement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AttachementId` on the `SubmissionAttachement` table. All the data in the column will be lost.
  - You are about to drop the column `SubmissionId` on the `SubmissionAttachement` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Teacher` table. All the data in the column will be lost.
  - The primary key for the `TeacherAccount` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AccountId` on the `TeacherAccount` table. All the data in the column will be lost.
  - You are about to drop the column `TeacherId` on the `TeacherAccount` table. All the data in the column will be lost.
  - Added the required column `passwordHash` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordSalt` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `relatedUserId` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountId` to the `AdminAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminId` to the `AdminAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exerciceId` to the `AssignmentSubmission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstSubmissionTimestamp` to the `AssignmentSubmission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `submissionsCount` to the `AssignmentSubmission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileExtension` to the `Attachement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheduledEndTime` to the `Conference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheduledStartTime` to the `Conference` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `stats` on the `Conference` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `description` to the `Exercice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attachementId` to the `ExerciceAttachement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exerciceId` to the `ExerciceAttachement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attachementId` to the `MaterialAttachement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `materialId` to the `MaterialAttachement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publishDate` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attachementId` to the `PostAttachement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postId` to the `PostAttachement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountId` to the `StudentAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentId` to the `StudentAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attachementId` to the `SubmissionAttachement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `submissionId` to the `SubmissionAttachement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountId` to the `TeacherAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherId` to the `TeacherAccount` table without a default value. This is not possible if the table is not empty.

*/

/*
-- DropForeignKey
ALTER TABLE "AdminAccount" DROP CONSTRAINT "AdminAccount_AccountId_fkey";

-- DropForeignKey
ALTER TABLE "AdminAccount" DROP CONSTRAINT "AdminAccount_AdminId_fkey";

-- DropForeignKey
ALTER TABLE "AssignmentSubmission" DROP CONSTRAINT "AssignmentSubmission_ExerciceId_fkey";

-- DropForeignKey
ALTER TABLE "ExerciceAttachement" DROP CONSTRAINT "ExerciceAttachement_AttachementId_fkey";

-- DropForeignKey
ALTER TABLE "ExerciceAttachement" DROP CONSTRAINT "ExerciceAttachement_ExerciceId_fkey";

-- DropForeignKey
ALTER TABLE "MaterialAttachement" DROP CONSTRAINT "MaterialAttachement_AttachementId_fkey";

-- DropForeignKey
ALTER TABLE "MaterialAttachement" DROP CONSTRAINT "MaterialAttachement_MaterialId_fkey";

-- DropForeignKey
ALTER TABLE "PostAttachement" DROP CONSTRAINT "PostAttachement_AttachementId_fkey";

-- DropForeignKey
ALTER TABLE "PostAttachement" DROP CONSTRAINT "PostAttachement_PostId_fkey";

-- DropForeignKey
ALTER TABLE "StudentAccount" DROP CONSTRAINT "StudentAccount_AccountId_fkey";

-- DropForeignKey
ALTER TABLE "StudentAccount" DROP CONSTRAINT "StudentAccount_StudentId_fkey";

-- DropForeignKey
ALTER TABLE "SubmissionAttachement" DROP CONSTRAINT "SubmissionAttachement_AttachementId_fkey";

-- DropForeignKey
ALTER TABLE "SubmissionAttachement" DROP CONSTRAINT "SubmissionAttachement_SubmissionId_fkey";

-- DropForeignKey
ALTER TABLE "TeacherAccount" DROP CONSTRAINT "TeacherAccount_AccountId_fkey";

-- DropForeignKey
ALTER TABLE "TeacherAccount" DROP CONSTRAINT "TeacherAccount_TeacherId_fkey";

*/
-- AlterTable
ALTER TABLE "Account" 
RENAME COLUMN "Password_salt" TO"passwordSalt";
ALTER TABLE "Account" 
RENAME COLUMN "UserName" TO"userName";
ALTER TABLE "Account" 
RENAME COLUMN "password_hash" TO"passwordHash" ;
ALTER TABLE "Account" 
RENAME COLUMN "relateduser_ID" TO"relatedUserId" ;


-- AlterTable
ALTER TABLE "Admin" 
RENAME COLUMN "FirstName" TO"firstName" ;
ALTER TABLE "Admin" 
RENAME COLUMN "LastName" TO"lastName" ;



-- AlterTable
ALTER TABLE "AdminAccount" 
RENAME COLUMN "AccountId" TO "accountId" ;
ALTER TABLE "AdminAccount" 
RENAME COLUMN "AdminId" TO "adminId";



-- AlterTable
ALTER TABLE "AssignmentSubmission" 
RENAME COLUMN "ExerciceId" TO"exerciceId" ;
ALTER TABLE "AssignmentSubmission" 
RENAME COLUMN "first_submission_timestamp" TO"firstSubmissionTimestamp" ;
ALTER TABLE "AssignmentSubmission" 
RENAME COLUMN "latest_submission_timestamp" TO"latestSubmissionTimestamp" ;
ALTER TABLE "AssignmentSubmission" 
RENAME COLUMN "submissions_count" TO"submissionsCount" ;

-- AlterTable
ALTER TABLE "Attachement"
RENAME COLUMN "type" TO "fileExtension";

-- AlterTable
ALTER TABLE "Conference" 
RENAME COLUMN "scheduled_end_time" TO "scheduledEndTime";
ALTER TABLE "Conference" 
RENAME COLUMN "scheduled_start_time" TO "scheduledStartTime";
ALTER TABLE "Conference" 
DROP COLUMN "stats",
ADD COLUMN     "stats" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "CourseMaterial" 

DROP COLUMN "file_type";

-- AlterTable
ALTER TABLE "Exercice" 
RENAME COLUMN "deadline_datetime" TO "deadlineTimestamp";
ALTER TABLE "Exercice" 
RENAME COLUMN "desription" TO "description";


-- AlterTable
ALTER TABLE "ExerciceAttachement" 
RENAME COLUMN "AttachementId" TO "attachementId";
ALTER TABLE "ExerciceAttachement" 
RENAME COLUMN "ExerciceId" TO "exerciceId";



-- AlterTable
ALTER TABLE "MaterialAttachement"
RENAME COLUMN "AttachementId" TO "attachementId";
ALTER TABLE "MaterialAttachement"
RENAME COLUMN "MaterialId" TO "materialId";



-- AlterTable
ALTER TABLE "Post" 
RENAME COLUMN "last_modified" TO "lastModified";
ALTER TABLE "Post"
RENAME COLUMN "publish_date" TO "publishDate";

-- AlterTable
ALTER TABLE "PostAttachement" 
RENAME COLUMN "AttachementId" TO "attachementId";
ALTER TABLE "PostAttachement" 
RENAME COLUMN "PostId" TO "postId";



-- AlterTable
ALTER TABLE "Student"
RENAME COLUMN "first_name" TO"firstName";
ALTER TABLE "Student"
RENAME COLUMN "last_name" TO"lastName" ;
ALTER TABLE "Student"
ADD COLUMN     "fullName" TEXT ;

-- AlterTable
ALTER TABLE "StudentAccount" 
RENAME COLUMN "AccountId" TO"accountId" ;
ALTER TABLE "StudentAccount"
RENAME COLUMN "StudentId" TO"studentId" ;



-- AlterTable
ALTER TABLE "SubmissionAttachement" 
RENAME COLUMN "AttachementId" TO "attachementId";
ALTER TABLE "SubmissionAttachement"
RENAME COLUMN "SubmissionId" TO "submissionId";

-- AlterTable
ALTER TABLE "Teacher"
RENAME COLUMN "last_name" TO"lastName";
ALTER TABLE "Teacher"
RENAME COLUMN "name" TO"firstName";
ALTER TABLE "Teacher"
ADD COLUMN     "fullName" TEXT NOT NULL;



-- AlterTable
ALTER TABLE "TeacherAccount" 
RENAME COLUMN "AccountId" TO "accountId";
ALTER TABLE "TeacherAccount"
RENAME COLUMN "TeacherId" TO "teacherId";

/*
-- AddForeignKey
ALTER TABLE "AssignmentSubmission" ADD CONSTRAINT "AssignmentSubmission_exerciceId_fkey" FOREIGN KEY ("exerciceId") REFERENCES "Exercice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
*/