/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ServiceToSkill` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bairro` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `obs` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeId` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Made the column `subtitle` on table `Service` required. This step will fail if there are existing NULL values in that column.
  - Made the column `link` on table `Service` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `Service` required. This step will fail if there are existing NULL values in that column.
  - Made the column `icon` on table `Service` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rate` on table `Service` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `serviceId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_userId_fkey";

-- DropForeignKey
ALTER TABLE "Type" DROP CONSTRAINT "Type_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "_ServiceToSkill" DROP CONSTRAINT "_ServiceToSkill_A_fkey";

-- DropForeignKey
ALTER TABLE "_ServiceToSkill" DROP CONSTRAINT "_ServiceToSkill_B_fkey";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "bairro" TEXT NOT NULL,
ADD COLUMN     "number" TEXT NOT NULL,
ADD COLUMN     "obs" TEXT NOT NULL,
ADD COLUMN     "typeId" INTEGER NOT NULL,
ALTER COLUMN "subtitle" SET NOT NULL,
ALTER COLUMN "link" SET NOT NULL,
ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "icon" SET NOT NULL,
ALTER COLUMN "rate" SET NOT NULL,
ALTER COLUMN "status" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "serviceId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Skill";

-- DropTable
DROP TABLE "Type";

-- DropTable
DROP TABLE "_ServiceToSkill";

-- CreateTable
CREATE TABLE "ServiceType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ServiceType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Portfolio" (
    "id" SERIAL NOT NULL,
    "projeto" TEXT NOT NULL,
    "cliente" TEXT NOT NULL,
    "resultado" TEXT NOT NULL,
    "mainUserId" INTEGER,

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MainUser" (
    "id" SERIAL NOT NULL,
    "avatar" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "star" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "profissao" TEXT NOT NULL,
    "experiencia" TEXT NOT NULL,
    "especialidades" TEXT[],
    "userId" INTEGER NOT NULL,
    "contactId" INTEGER NOT NULL,

    CONSTRAINT "MainUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ServiceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Portfolio" ADD CONSTRAINT "Portfolio_mainUserId_fkey" FOREIGN KEY ("mainUserId") REFERENCES "MainUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MainUser" ADD CONSTRAINT "MainUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MainUser" ADD CONSTRAINT "MainUser_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
