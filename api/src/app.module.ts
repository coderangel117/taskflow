import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [UserModule, TaskModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
