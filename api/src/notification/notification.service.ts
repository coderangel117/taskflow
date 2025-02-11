import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { NotificationDto } from '../Dto/NotificationDto';

@Injectable()
export class NotificationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: NotificationDto) {
    await this.prisma.notification.create({
      data: {
        title: data.title,
        message: data.message,
        isRead: data.isRead,
        type: data.type,
        user: { connect: { id: data.userId } },
      },
    });
  }

  async findAll() {
    return this.prisma.notification.findMany();
  }

  async findById(id: number) {
    return this.prisma.notification.findUnique({
      where: { id },
    });
  }

  async findByUserId(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async update(id: number) {
    return this.prisma.notification.update({
      where: { id },
      data: { isRead: true },
    });
  }
}
