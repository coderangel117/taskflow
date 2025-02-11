import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationDto } from '../Dto/NotificationDto';

@Controller('setting')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  async create(
    @Body()
    data: NotificationDto,
  ) {
    return this.notificationService.create(data);
  }

  @Get()
  async findAll() {
    return this.notificationService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id') id: number) {
    return this.notificationService.findById(id);
  }

  @Get('/:userId')
  async findByUserId(@Param('userId') userId: string) {
    return this.notificationService.findByUserId(Number(userId));
  }

  @Put()
  async update(@Param('id') id: number) {
    return this.notificationService.update(id);
  }
}
