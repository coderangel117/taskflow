import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Section, TaskStatus } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async getTasks() {
    return this.prisma.task.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        section: true,
        user: {
          select: {
            id: true,
            email: true,
          },
        },
        tags: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async getTaskById(id: number) {
    return this.prisma.task.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        section: true,
        user: {
          select: {
            id: true,
            email: true,
          },
        },
        tags: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async updateTask(id: number) {
    return this.prisma.task.update({
      where: { id },
      data: {
        title: '',
        description: '',
      },
    });
  }

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

  async deleteTask(id: number) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
