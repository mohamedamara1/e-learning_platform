/*
  Warnings:

  - You are about to drop the column `latest_timestamp` on the `AssignmentSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `respected_deadline` on the `AssignmentSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `submission_date` on the `AssignmentSubmission` table. All the data in the column will be lost.
  - Added the required column `first_submission_timestamp` to the `AssignmentSubmission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AssignmentSubmission" DROP COLUMN "latest_timestamp",
DROP COLUMN "respected_deadline",
DROP COLUMN "submission_date",
ADD COLUMN     "first_submission_timestamp" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "latest_submission_timestamp" TIMESTAMP(3);
