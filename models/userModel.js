import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    score: {
        type: Number,
        default: 0
    },
    todos: [{type: mongoose.Schema.Types.ObjectId, ref: "TodoModel"}],
    hash: String

})

const userModel = mongoose.model("UserModel", UserSchema, "users")

export default userModel