import { Module } from '@nestjs/common';
import { PreferenceService } from './preference.service';
import { PreferenceController } from './preference.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [PreferenceController],
  providers: [PreferenceService, PrismaService],
  exports: [PreferenceService],
})
export class PreferenceModule {}
