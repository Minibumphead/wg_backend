import mongoose from 'mongoose'

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        enum: ["Bad", "Gang", "Kueche", "Sonstiges"],
        default: "Kueche"
    },
    description: String,
    assignedOn: {
        type: Date,
        default: new Date
    },
    completedOn: {
        type: Date
    },
    expiresOn: {
        type: Date
    },
    pointsAwarded: {
        type: Number,
        default: 20
    },
    timeSpent: {
        type: Number
    },
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

const TodoModel = mongoose.model("Todo", todoSchema, "tooodooos")

export default TodoModel