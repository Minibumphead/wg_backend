import todoModel from './../models/todoModel.js'


export const getTodos = async (req,res) => {
    try {
        const allTodos = await todoModel.find()
        res.send(allTodos)
    } catch (error) {
        console.log('try failed', error)
    }
}

export const createTodo = async (req,res) => {
    try {
        const data = req.body
        const newTodo = await todoModel.create(data)
        res.send(newTodo)
    } catch (error) {
        console.log('try failed', error)
    }
}

export const updateTodo = async (req,res) => {
    try {
        res.send("update")
    } catch (error) {
        console.log('try failed', error)
    }
}

export const deleteTodo = async (req,res) => {
    try {
        const id = req.params.id
        deletedTodo = await todoModel.findByIdAndDelete(id)
        remainingTodos = todoModel.find()
        res.send(remainingTodos)
    } catch (error) {
        console.log('try failed', error)
    }
}