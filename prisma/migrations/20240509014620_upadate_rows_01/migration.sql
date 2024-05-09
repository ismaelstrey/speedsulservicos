/*
  Warnings:

  - You are about to drop the column `especialidades` on the `MainUser` table. All the data in the column will be lost.
  - Added the required column `especialidadesId` to the `MainUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MainUser" DROP COLUMN "especialidades",
ADD COLUMN     "especialidadesId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Especialidades" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Especialidades_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MainUser" ADD CONSTRAINT "MainUser_especialidadesId_fkey" FOREIGN KEY ("especialidadesId") REFERENCES "Especialidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
