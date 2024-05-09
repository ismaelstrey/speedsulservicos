-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_typeId_fkey";

-- AlterTable
ALTER TABLE "Service" ALTER COLUMN "typeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ServiceType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
