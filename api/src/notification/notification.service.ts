import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class NotificationService {
  constructor(private readonly prisma: PrismaService) {}

  async getNotifications() {
    return this.prisma.notification.findMany();
  }

  async getNotificationById(id: number) {
    return this.prisma.notification.findUnique({
      where: { id },
    });
  }

  async updateNotification(id: number) {
    return this.prisma.notification.update({
      where: { id },
      data: { isRead: true },
    });
  }
}
