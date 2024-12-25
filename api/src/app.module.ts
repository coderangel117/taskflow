import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, TaskModule, AuthModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
