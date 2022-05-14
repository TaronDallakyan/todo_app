const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const router = require('./routes/routes.js')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', router)
app.use('/createTodo', router)
app.use('/getTodo', router)
app.use('/updateTodo', router)
app.use('/deleteTodo', router)


mongoose.connect('mongodb+srv://taron99:taron911@cluster0.bqaqj.mongodb.net/todoappdb?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log(err))


app.listen(3001, () => console.log('Server listening on port 3001'))