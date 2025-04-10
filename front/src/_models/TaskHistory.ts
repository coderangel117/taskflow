import type { Task } from '@/_models/Tasks.ts'

export interface TaskHistory {
  id?: number
  taskId: number
  task: Task
  fieldName: string
  oldValue?: string
  newValue: string
  changedAt?: Date
}
