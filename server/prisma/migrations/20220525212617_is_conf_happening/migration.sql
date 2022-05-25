/*
  Warnings:

  - You are about to drop the column `scheduledEndTime` on the `Conference` table. All the data in the column will be lost.
  - Added the required column `url` to the `Attachement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Conference` table without a default value. This is not possible if the table is not empty.
  - Made the column `materialUnitId` on table `CourseMaterial` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CourseMaterial" DROP CONSTRAINT "CourseMaterial_materialUnitId_fkey";

-- AlterTable
ALTER TABLE "Attachement" ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Conference" DROP COLUMN "scheduledEndTime",
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "endTime" TIMESTAMP(3),
ALTER COLUMN "stats" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "isConferenceHappening" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "CourseMaterial" ALTER COLUMN "materialUnitId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "CourseMaterial" ADD CONSTRAINT "CourseMaterial_materialUnitId_fkey" FOREIGN KEY ("materialUnitId") REFERENCES "MaterialUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
