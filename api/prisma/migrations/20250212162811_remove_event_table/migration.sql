/*
  Warnings:

  - You are about to drop the `event` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `event` DROP FOREIGN KEY `Event_taskId_fkey`;

-- DropForeignKey
ALTER TABLE `event` DROP FOREIGN KEY `Event_userId_fkey`;

-- AlterTable
ALTER TABLE `task` ADD COLUMN `endDate` DATETIME(3) NULL,
    ADD COLUMN `startDate` DATETIME(3) NULL;

-- DropTable
DROP TABLE `event`;
