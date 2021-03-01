import express from 'express'
import { getUsers, createUser, deleteUser, updateUser } from '../controllers/users.js'
import { loginUser } from '../services/users.js'

const UserRouter = express.Router()

UserRouter.get('/', getUsers)
UserRouter.post('/', createUser)
UserRouter.delete('/:id', deleteUser)
UserRouter.put('/:id', updateUser)
UserRouter.post('/login', loginUser)

export default UserRouter