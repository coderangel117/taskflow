import type TaskHistory from './TaskHistory'
import type { TaskStatus } from './TaskStatus'

export interface Task {
  id: number
  title: string
  description?: string
  section: 'UrgentImportant' | 'NonUrgentImportant' | 'UrgentNonImportant' | 'NonUrgentNonImportant'
  status: TaskStatus
  startDate?: Date
  endDate?: Date
  dueDate?: Date
  isCompleted: boolean
  userId: number
  history: TaskHistory[]
}
