import { Controller, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskStatus, Section } from '@prisma/client'; // Importer les énumérations

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create() {
    await this.taskService.create({
      title: 'Task 1',
      description: 'Description 1',
      status: TaskStatus.pending,
      section: Section.UrgentImportant,
      userId: 1,
      tags: [],
    });
  }
}
