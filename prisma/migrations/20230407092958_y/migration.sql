/*
  Warnings:

  - The primary key for the `Excel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `action` on the `Excel` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `Excel` table. All the data in the column will be lost.
  - You are about to drop the column `company` on the `Excel` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Excel` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Excel` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `Excel` table. All the data in the column will be lost.
  - You are about to drop the column `logo` on the `Excel` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Excel` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Excel` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `Excel` table. All the data in the column will be lost.
  - You are about to drop the column `slogan` on the `Excel` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Excel` table. All the data in the column will be lost.
  - You are about to drop the column `web` on the `Excel` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Email]` on the table `Excel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[NameId]` on the table `Excel` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Email` to the `Excel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NameId` to the `Excel` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Excel_email_key";

-- DropIndex
DROP INDEX "Excel_name_key";

-- AlterTable
ALTER TABLE "Excel" DROP CONSTRAINT "Excel_pkey",
DROP COLUMN "action",
DROP COLUMN "address",
DROP COLUMN "company",
DROP COLUMN "email",
DROP COLUMN "id",
DROP COLUMN "img",
DROP COLUMN "logo",
DROP COLUMN "name",
DROP COLUMN "phone",
DROP COLUMN "position",
DROP COLUMN "slogan",
DROP COLUMN "username",
DROP COLUMN "web",
ADD COLUMN     "Action" TEXT,
ADD COLUMN     "Address" TEXT,
ADD COLUMN     "Avatar" TEXT,
ADD COLUMN     "Company" TEXT,
ADD COLUMN     "Email" TEXT NOT NULL,
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "Logo" TEXT,
ADD COLUMN     "Name" TEXT,
ADD COLUMN     "NameId" TEXT NOT NULL,
ADD COLUMN     "Phone" TEXT,
ADD COLUMN     "Slogan" TEXT,
ADD COLUMN     "Title" TEXT,
ADD COLUMN     "Web" TEXT,
ADD CONSTRAINT "Excel_pkey" PRIMARY KEY ("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Excel_Email_key" ON "Excel"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Excel_NameId_key" ON "Excel"("NameId");
