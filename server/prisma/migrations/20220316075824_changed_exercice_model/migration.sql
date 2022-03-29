/*
  Warnings:

  - You are about to drop the column `assignmentId` on the `AssignmentSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `courseId` on the `CourseMaterial` table. All the data in the column will be lost.
  - You are about to drop the `Assignment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AssignmentAttachement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Attachment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TeacherPost` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ExerciceId` to the `AssignmentSubmission` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Assignment" DROP CONSTRAINT "Assignment_courseId_fkey";

-- DropForeignKey
ALTER TABLE "AssignmentAttachement" DROP CONSTRAINT "AssignmentAttachement_AssignmentId_fkey";

-- DropForeignKey
ALTER TABLE "AssignmentAttachement" DROP CONSTRAINT "AssignmentAttachement_AttachementId_fkey";

-- DropForeignKey
ALTER TABLE "AssignmentSubmission" DROP CONSTRAINT "AssignmentSubmission_assignmentId_fkey";

-- DropForeignKey
ALTER TABLE "CourseMaterial" DROP CONSTRAINT "CourseMaterial_courseId_fkey";

-- DropForeignKey
ALTER TABLE "MaterialAttachement" DROP CONSTRAINT "MaterialAttachement_AttachementId_fkey";

-- DropForeignKey
ALTER TABLE "PostAttachement" DROP CONSTRAINT "PostAttachement_AttachementId_fkey";

-- DropForeignKey
ALTER TABLE "PostAttachement" DROP CONSTRAINT "PostAttachement_PostId_fkey";

-- DropForeignKey
ALTER TABLE "SubmissionAttachement" DROP CONSTRAINT "SubmissionAttachement_AttachementId_fkey";

-- DropForeignKey
ALTER TABLE "TeacherPost" DROP CONSTRAINT "TeacherPost_courseId_fkey";

-- AlterTable
ALTER TABLE "AssignmentSubmission" DROP COLUMN "assignmentId",
ADD COLUMN     "ExerciceId" INTEGER NOT NULL,
ALTER COLUMN "submission_date" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "CourseMaterial" DROP COLUMN "courseId",
ADD COLUMN     "materialUnitId" INTEGER;

-- DropTable
DROP TABLE "Assignment";

-- DropTable
DROP TABLE "AssignmentAttachement";

-- DropTable
DROP TABLE "Attachment";

-- DropTable
DROP TABLE "TeacherPost";

-- CreateTable
CREATE TABLE "Exercice" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "practiceUnitId" INTEGER NOT NULL,
    "desription" TEXT NOT NULL,
    "isAssignment" BOOLEAN NOT NULL,
    "deadline_datetime" TIMESTAMP(3),

    CONSTRAINT "Exercice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PracticeUnit" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "PracticeUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaterialUnit" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "MaterialUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attachement" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "size" TEXT NOT NULL,

    CONSTRAINT "Attachement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "publish_date" TIMESTAMP(3) NOT NULL,
    "last_modified" TIMESTAMP(3) NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerciceAttachement" (
    "ExerciceId" INTEGER NOT NULL,
    "AttachementId" INTEGER NOT NULL,

    CONSTRAINT "ExerciceAttachement_pkey" PRIMARY KEY ("ExerciceId","AttachementId")
);

-- AddForeignKey
ALTER TABLE "Exercice" ADD CONSTRAINT "Exercice_practiceUnitId_fkey" FOREIGN KEY ("practiceUnitId") REFERENCES "PracticeUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PracticeUnit" ADD CONSTRAINT "PracticeUnit_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseMaterial" ADD CONSTRAINT "CourseMaterial_materialUnitId_fkey" FOREIGN KEY ("materialUnitId") REFERENCES "MaterialUnit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialUnit" ADD CONSTRAINT "MaterialUnit_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssignmentSubmission" ADD CONSTRAINT "AssignmentSubmission_ExerciceId_fkey" FOREIGN KEY ("ExerciceId") REFERENCES "Exercice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciceAttachement" ADD CONSTRAINT "ExerciceAttachement_ExerciceId_fkey" FOREIGN KEY ("ExerciceId") REFERENCES "Exercice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciceAttachement" ADD CONSTRAINT "ExerciceAttachement_AttachementId_fkey" FOREIGN KEY ("AttachementId") REFERENCES "Attachement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostAttachement" ADD CONSTRAINT "PostAttachement_AttachementId_fkey" FOREIGN KEY ("AttachementId") REFERENCES "Attachement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostAttachement" ADD CONSTRAINT "PostAttachement_PostId_fkey" FOREIGN KEY ("PostId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialAttachement" ADD CONSTRAINT "MaterialAttachement_AttachementId_fkey" FOREIGN KEY ("AttachementId") REFERENCES "Attachement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubmissionAttachement" ADD CONSTRAINT "SubmissionAttachement_AttachementId_fkey" FOREIGN KEY ("AttachementId") REFERENCES "Attachement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
