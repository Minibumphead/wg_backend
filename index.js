import express from 'express'
import cors from 'cors'
import UserRouter from './routes/usersRouter.js'
import mongoose from 'mongoose'
// initialize app
const app = express()

//configure Port
const PORT = 5000
mongoose.connect('mongodb+srv://Minibumphead:catdogmouse!!!999@cluster0.5gnyy.mongodb.net/counter_db?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false}).then(
    () => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))    
).catch(
    () => console.log("asdfaldfadsf")
)

//Set up middleware
app.use(cors())
app.use(express.json())

app.use('/users', UserRouter)
app.get('/', (req,res) => res.send("<h1>Server running on 127.0.0.1:5000</h1>"))

