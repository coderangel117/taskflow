import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { TaskStatus, Section } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: {
    title: string;
    description?: string;
    status: TaskStatus;
    section: Section;
    userId: number;
    tags?: { id: number }[];
  }) {
    await this.prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
        status: data.status,
        section: data.section,
        user: { connect: { id: data.userId } },
        tags: data.tags ? { connect: data.tags } : undefined,
      },
    });
  }
}
