const express = require('express')
const router = express.Router()

const { getTodos, createTodo, getTodo, updateTodo, deleteTodo } = require('../controllers/todo.controller.js') 

router.get('/', getTodos)
router.post('/createTodo', createTodo)
router.get('/:id', getTodo)
router.put('/:id', updateTodo)
router.delete('/:id', deleteTodo)


module.exports = router