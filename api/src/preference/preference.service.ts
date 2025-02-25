import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PreferenceService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.preference.findMany();
  }

  async findOne(id: number) {
    return this.prisma.preference.findUnique({
      where: { id },
    });
  }

  async create(data: any) {
    return this.prisma.preference.create({
      data,
    });
  }

  async update(id: number, data: any) {
    return this.prisma.preference.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.preference.delete({
      where: { id },
    });
  }
}
