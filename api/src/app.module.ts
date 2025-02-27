import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { PreferenceModule } from './preference/preference.module';

@Module({
  imports: [UserModule, TaskModule, AuthModule, PreferenceModule],
  providers: [PrismaService],
})
export class AppModule {}
