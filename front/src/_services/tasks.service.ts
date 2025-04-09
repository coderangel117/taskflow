import Axios from '@/_services/caller.service'
import type { TaskModel } from '@/_models/Tasks.ts'

const addTask = (task: TaskModel) => {
  return Axios.post('/task', task)
}

const getTasks = () => {
  return Axios.get('/task')
}

const getTaskById = (id: number) => {
  return Axios.get(`/task/${id}`)
}

const updateTask = (id: number, task: TaskModel) => {
  return Axios.put(`/task/${id}`, task)
}

const deleteTask = (id: number) => {
  return Axios.delete(`/task/${id}`)
}

export const TaskService = {
  addTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
}
