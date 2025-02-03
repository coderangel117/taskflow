import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Section, TaskStatus } from '@prisma/client';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getTasks() {
    return this.taskService.getTasks();
  }

  @Get('/:id')
  async getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(Number(id));
  }

  @Put('/:id')
  async updateTask(@Param('id') id: string) {
    return this.taskService.updateTask(Number(id));
  }

  @Post()
  async create(
    @Body()
    data: {
      title: string;
      description?: string;
      status: TaskStatus;
      section: Section;
      userId: number;
      tags?: { id: number }[];
    },
  ) {
    return this.taskService.create(data);
  }

  @Get('/user/:userId')
  async findByUser(@Param('userId') userId: string) {
    return this.taskService.findByUser(Number(userId));
  }

  @Delete('/:id')
  async deleteTask(
    @Param('id')
    id: string,
  ) {
    return this.taskService.deleteTask(Number(id));
  }
}
