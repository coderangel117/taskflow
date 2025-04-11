-- CreateTable
CREATE TABLE `Notification`
(
  `id`        INTEGER      NOT NULL AUTO_INCREMENT,
  `title`     VARCHAR(191) NOT NULL,
  `message`   VARCHAR(191) NOT NULL,
  `isRead`    BOOLEAN      NOT NULL DEFAULT false,
  `type`      VARCHAR(191) NOT NULL,
  `userId`    INTEGER      NOT NULL,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL,

  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TaskHistory`
(
  `id`        INTEGER      NOT NULL AUTO_INCREMENT,
  `taskId`    INTEGER      NOT NULL,
  `fieldName` VARCHAR(191) NOT NULL,
  `oldValue`  VARCHAR(191) NULL,
  `newValue`  VARCHAR(191) NOT NULL,
  `changedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Notification`
  ADD CONSTRAINT `Notification_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskHistory`
  ADD CONSTRAINT `TaskHistory_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `Task` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
