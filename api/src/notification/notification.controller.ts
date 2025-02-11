import { Controller, Get } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('setting')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  async getNotifications() {
    return this.notificationService.getNotifications();
  }

  async getNotificationById(id: number) {
    return this.notificationService.getNotificationById(id);
  }

  async updateNotification(id: number) {
    return this.notificationService.updateNotification(id);
  }
}
