import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  async getUsers() {
    return this.userService.getUsers();
  }

  @Get('/email/:email')
  async getUserByEmail(@Param('email') email: string) {
    return this.userService.getUserByEmail(email);
  }

  @Get('/:id')
  async getUserById(@Param('id') id: string) {
    return this.userService.getUserById(Number(id));
  }

  @Post('')
  async createUser(@Body() body: User) {
    const { email, password } = body;
    if (!email || !password) {
      return {
        statusCode: 400,
        message: 'Email and password are required',
      };
    }
    return this.userService.create(email, password);
  }

  @Patch('/:id')
  async updateUser(@Param('id') id: string) {
    return this.userService.update(Number(id));
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.delete(Number(id));
  }
}
