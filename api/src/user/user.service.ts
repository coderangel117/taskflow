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

  async updateUser(id: number) {
    return this.prisma.user.update({
      where: { id },
      data: {
        email: '',
      },
    });
  }

  async deleteUser(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
