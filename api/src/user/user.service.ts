import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async getUserByEmail(email: string) {
    const user = this.prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!user) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'User not found',
      };
    }
    return user;
  }

  getUserById(id: number) {
    const user = this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!user) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'User not found',
      };
    }
    return user;
  }

  async create(email: string, password: string) {
    const existingUser = await this.getUserByEmail(email);

    if (existingUser) {
      // User already exists
      console.log(existingUser);
      return JSON.stringify({
        StatusCode: HttpStatus.BAD_REQUEST,
        message: 'User already exists',
      });
    }
    return this.prisma.user.create({
      data: {
        email,
        password,
      },
    });
  }

  async update(id: number) {
    return this.prisma.user.update({
      where: { id },
      data: {
        email: '',
      },
    });
  }

  async delete(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
