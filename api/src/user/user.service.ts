import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';

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

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(password, hashedPassword);
    password = hashedPassword;
    // Check if the user already exists
    if (existingUser) {
      // User already exists
      console.log(existingUser);
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'User already exists',
        },
        HttpStatus.BAD_REQUEST,
      );
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
