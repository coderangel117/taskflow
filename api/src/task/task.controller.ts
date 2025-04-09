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
import { TaskDto } from '../Dto/TaskDto';

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

  @Get('/user/:userId')
  async findByUser(@Param('userId') userId: string) {
    return this.taskService.findByUser(Number(userId));
  }

  @Post()
  async create(
    @Body()
    data: TaskDto,
  ) {
    return this.taskService.create(data);
  }

  @Put('/:id')
  async updateTask(@Param('id') id: string) {
    return this.taskService.update(Number(id));
  }

  @Delete('/:id')
  async deleteTask(
    @Param('id')
    id: string,
  ) {
    return this.taskService.delete(Number(id));
  }
}
