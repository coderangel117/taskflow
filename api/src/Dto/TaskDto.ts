import { Event, Section, TaskHistory, TaskStatus } from '@prisma/client';

export class TaskDto {
  title: string;
  description?: string;
  section: Section;
  status: TaskStatus;
  dueDate: Date;
  isCompleted: boolean;
  userId: number;
  tags?: { id: number }[];
  history: TaskHistory[];
  Event: Event[];
}
