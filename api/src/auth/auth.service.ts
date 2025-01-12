import { HttpStatus, Injectable } from '@nestjs/common';
import { RegisterDto } from '../Dto/RegisterDto';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  async register(data: RegisterDto) {
    const { password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await this.prisma.user.create({
        data: {
          email: data.email,
          password: hashedPassword,
        },
      });
      return {
        statusCode: HttpStatus.CREATED,
        message: 'User created successfully',
        data: {
          id: user.id,
          email: user.email,
        },
      };
    } catch (error) {
      if (error.code === 'P2002') {
        return {
          statusCode: HttpStatus.CONFLICT,
          message: 'User already exists',
        };
      }
      throw error;
    }
  }

  async login(data: any): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });
    if (!user) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'User not found',
      };
    }
    return this.comparePasswords(data.password, user.password).then((match) => {
      if (!match) {
        return {
          statusCode: HttpStatus.UNAUTHORIZED,
          message: 'Incorrect password',
        };
      }
      const payload = { email: user.email, sub: user.id };
      const secret = this.configService.get<string>('JWT_SECRET');
      return {
        statusCode: HttpStatus.OK,
        message: 'User logged in successfully',
        data: {
          id: user.id,
          email: user.email,
          access_token: this.jwtService.sign(payload, { secret: secret }),
        },
      };
    });
  }
}
