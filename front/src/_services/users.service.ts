import Axios from '@/_services/caller.service'
import type { User } from '@/_models/User.ts'

const addUser = (user: User) => {
  return Axios.post('/user', user)
}

const getUsers = () => {
  return Axios.get('/users')
}

const getUser = (id: string) => {
  return Axios.get(`/user/${id}`)
}

const updateUser = (user: User) => {
  return Axios.put(`/user/${user.id}`, user)
}

const deleteUser = (id: string) => {
  return Axios.delete(`/user/${id}`)
}
export const UserService = {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
}
