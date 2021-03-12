import TodoModel from './../models/todoModel.js'
import UserModel from './../models/userModel.js'



export const getTodos = async (req,res) => {
    try {
        const allTodos = await TodoModel.find()
        res.send(allTodos)
    } catch (error) {
        console.log('try failed', error)
    }
}


export const createTodo = async (req,res) => {
    try {
        const {assignedOn, description, expiresOn, pointsAwarded, timeSpent, title, username } = req.body
        const assignedUser = await UserModel.findOne({username: username})
        console.log(assignedUser)
        const newTodo = new TodoModel({
            title: title,
            description: description,
            // completed: false,
            assignedOn: assignedOn,
            expiresOn: expiresOn,
            pointsAwarded: pointsAwarded,
            timeSpent: timeSpent,
            user: assignedUser._id
        })
        newTodo.save()
        res.send(newTodo)
    } catch (error) {
        console.log('try failed', error)
    }
}

export const updateTodo = async (req,res) => {
    try {
        const { id } = req.params
        const data = req.body
        
        if (data.username) {
            const updatedUserName = data.username
            const newUser = await UserModel.findOne({username: updatedUserName})
            const updatedUserId = newUser._id
            const updatedTodo = await TodoModel.findByIdAndUpdate({_id: id}, {...data, completed: data.completed, user: updatedUserId}, {new: true})
            res.send(updatedTodo)
        } else {
            const updatedTodo = await TodoModel.findByIdAndUpdate({_id: id}, {completed: !data.completed}, {new:true} )
            res.send(updatedTodo)
        }
    }catch (error) {
        console.log('try failed', error)
    }
}

export const deleteTodo = async (req,res) => {
    try {
        const id = req.params.id
          await TodoModel.findByIdAndDelete(id)
        const remainingTodos = await TodoModel.find()

        res.send(remainingTodos)
    } catch (error) {
        console.log('try failed', error)
    }
}