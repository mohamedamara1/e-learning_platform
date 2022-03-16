/*
  Warnings:

  - Made the column `fullName` on table `Student` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "fullName" SET NOT NULL;

-- RenameForeignKey
ALTER TABLE "AdminAccount" RENAME CONSTRAINT "AdminAccount_AccountId_fkey" TO "AdminAccount_accountId_fkey";

-- RenameForeignKey
ALTER TABLE "AdminAccount" RENAME CONSTRAINT "AdminAccount_AdminId_fkey" TO "AdminAccount_adminId_fkey";

-- RenameForeignKey
ALTER TABLE "AssignmentSubmission" RENAME CONSTRAINT "AssignmentSubmission_ExerciceId_fkey" TO "AssignmentSubmission_exerciceId_fkey";

-- RenameForeignKey
ALTER TABLE "ExerciceAttachement" RENAME CONSTRAINT "ExerciceAttachement_AttachementId_fkey" TO "ExerciceAttachement_attachementId_fkey";

-- RenameForeignKey
ALTER TABLE "ExerciceAttachement" RENAME CONSTRAINT "ExerciceAttachement_ExerciceId_fkey" TO "ExerciceAttachement_exerciceId_fkey";

-- RenameForeignKey
ALTER TABLE "MaterialAttachement" RENAME CONSTRAINT "MaterialAttachement_AttachementId_fkey" TO "MaterialAttachement_attachementId_fkey";

-- RenameForeignKey
ALTER TABLE "MaterialAttachement" RENAME CONSTRAINT "MaterialAttachement_MaterialId_fkey" TO "MaterialAttachement_materialId_fkey";

-- RenameForeignKey
ALTER TABLE "PostAttachement" RENAME CONSTRAINT "PostAttachement_AttachementId_fkey" TO "PostAttachement_attachementId_fkey";

-- RenameForeignKey
ALTER TABLE "PostAttachement" RENAME CONSTRAINT "PostAttachement_PostId_fkey" TO "PostAttachement_postId_fkey";

-- RenameForeignKey
ALTER TABLE "StudentAccount" RENAME CONSTRAINT "StudentAccount_AccountId_fkey" TO "StudentAccount_accountId_fkey";

-- RenameForeignKey
ALTER TABLE "StudentAccount" RENAME CONSTRAINT "StudentAccount_StudentId_fkey" TO "StudentAccount_studentId_fkey";

-- RenameForeignKey
ALTER TABLE "SubmissionAttachement" RENAME CONSTRAINT "SubmissionAttachement_AttachementId_fkey" TO "SubmissionAttachement_attachementId_fkey";

-- RenameForeignKey
ALTER TABLE "SubmissionAttachement" RENAME CONSTRAINT "SubmissionAttachement_SubmissionId_fkey" TO "SubmissionAttachement_submissionId_fkey";

-- RenameForeignKey
ALTER TABLE "TeacherAccount" RENAME CONSTRAINT "TeacherAccount_AccountId_fkey" TO "TeacherAccount_accountId_fkey";

-- RenameForeignKey
ALTER TABLE "TeacherAccount" RENAME CONSTRAINT "TeacherAccount_TeacherId_fkey" TO "TeacherAccount_teacherId_fkey";
