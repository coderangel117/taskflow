import type Section from './Section'
import type TaskHistory from './TaskHistory'
import type { TaskStatus } from './TaskStatus'

export interface TaskModel {
  title: string
  description?: string
  section: Section
  status: TaskStatus
  startDate?: Date
  endDate?: Date
  dueDate?: Date
  isCompleted: boolean
  userId: number
  history: TaskHistory[]
}
