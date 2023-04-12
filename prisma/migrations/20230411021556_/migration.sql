/*
  Warnings:

  - You are about to drop the column `name` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Admin` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Admin_name_key";

-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "name",
DROP COLUMN "password";
