const Todo = require("../models/todoModel.js");

const getTodos = async (req, res, next) => {
  await Todo.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.status(400).json("Error: " + err));
};

const createTodo = async (req, res, next) => {
  const todo = req.body;
  const newTodo = new Todo(todo);
  await newTodo
    .save()
    .then(() => res.json(newTodo))
    .catch((err) => res.status(400).json("Error:" + err));
};

const getTodo = async (req, res, next) => {
  const id = req.params.id;
  await Todo.findById(id)
    .then((todo) => res.json(todo))
    .catch((err) => res.status(400).json("Error: " + err));
};

const updateTodo = async (req, res, next) => {
  const id = req.params.id;
  const todo = req.body;
  await Todo.findByIdAndUpdate(id, todo, { new: true })
    .then((updatedTodo) => res.json(updatedTodo))
    .catch((err) => res.json("Error:" + err));
};

const deleteTodo = async (req, res, next) => {
  const id = req.params.id;
  await Todo.findByIdAndRemove(id)
    .then(() => res.json("Todo deleted!"))
    .catch((err) => res.json("Error: " + err));
};

module.exports = { getTodos, createTodo, getTodo, updateTodo, deleteTodo };
