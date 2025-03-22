/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Info` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Info" DROP CONSTRAINT "Info_userId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Info_userId_key" ON "Info"("userId");

-- AddForeignKey
ALTER TABLE "Info" ADD CONSTRAINT "Info_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
