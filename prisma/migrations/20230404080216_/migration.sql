/*
  Warnings:

  - The primary key for the `Admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Admin` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Card` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Card` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `card` column on the `Card` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Admin_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Card" DROP CONSTRAINT "Card_pkey",
ADD COLUMN     "image" TEXT,
ADD COLUMN     "name" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "card",
ADD COLUMN     "card" JSONB,
ADD CONSTRAINT "Card_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "bio" TEXT;

-- CreateTable
CREATE TABLE "Excel" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "username" TEXT,
    "web" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "logo" TEXT,
    "slogan" TEXT,
    "position" TEXT,
    "action" TEXT,
    "img" TEXT,
    "company" TEXT,

    CONSTRAINT "Excel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Excel_name_key" ON "Excel"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Excel_email_key" ON "Excel"("email");
