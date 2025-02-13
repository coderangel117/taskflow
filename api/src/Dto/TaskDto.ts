import { Section, TaskHistory, TaskStatus } from '@prisma/client';

export class TaskDto {
  title: string;
  description?: string;
  section: Section;
  status: TaskStatus;
  startDate: Date;
  endDate: Date;
  dueDate: Date;
  isCompleted: boolean;
  userId: number;
  tags?: { id: number }[];
  history: TaskHistory[];
}
