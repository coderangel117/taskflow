import type { TaskHistory } from '@/_models/TaskHistory.ts'

export interface Task {
  id: number
  title: string
  description?: string
  section: 'UrgentImportant' | 'NonUrgentImportant' | 'UrgentNonImportant' | 'NonUrgentNonImportant'
  status: 'pending' | 'completed' | 'archived'
  startDate?: Date
  endDate?: Date
  dueDate?: Date
  isCompleted: boolean
  userId: number
  history?: TaskHistory[]
}
