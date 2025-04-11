import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { TaskDto } from '../Dto/TaskDto';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: TaskDto) {
    await this.prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        dueDate: data.dueDate,
        isCompleted: data.isCompleted,
        status: data.status,
        section: data.section,
        user: { connect: { id: data.userId } },
        tags: data.tags ? { connect: data.tags } : undefined,
      },
    });
  }

  async getTasks() {
    return this.prisma.task.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        section: true,
        startDate: true,
        endDate: true,
        dueDate: true,
        isCompleted: true,
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
    const task = this.prisma.task.findUnique({
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
    if (!task) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Task not found',
      };
    }
    return task;
  }

  async findByUser(userId: number) {
    const tasks = this.prisma.task.findMany({
      where: {
        userId,
      },
    });
    if (!tasks) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'User not found',
      };
    }
    return tasks;
  }

  async update(id: number, task: TaskDto) {
    return this.prisma.task.update({
      where: { id },
      data: {
        title: task.title,
        description: task.description,
        section: task.section,
        status: task.status,
        startDate: task.startDate || null,
        endDate: task.endDate || null,
        dueDate: task.dueDate || null,
        isCompleted: task.isCompleted,
        userId: task.userId,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
