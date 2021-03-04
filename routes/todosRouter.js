import { Router } from "express";
import {getTodos, createTodo, updateTodo, deleteTodo} from './../controllers/todos.js'


const todosRouter = Router()

todosRouter.get('/', getTodos)
todosRouter.post('/', createTodo)
todosRouter.put('/:id', updateTodo)
todosRouter.delete('/:id', deleteTodo)



export default todosRouter