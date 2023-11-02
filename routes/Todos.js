const express = require('express')
const router = express.Router()
const Todo = require('../models/Todos.js')

router.get('/', async (req, res) => {
	const todos = await Todo.find();
	res.json(todos);
})

router.post('/new', async (req, res) => {
	const newTodo = new Todo(
	{
		receiver: "Shuji Nakamura",
		contry: "Japan"
	});
	const savedTodo = await newTodo.save()
	res.json(savedTodo)
})

router.get('/get/:id', async (req, res) => {
	const todoId = await Todo.findById( req.params.id );
	res.json(todoId);
})

router.delete('/delete/:id', async (req, res) => {
	const todoDeleteById = await Todo.findByIdAndDelete( req.params.id );
	res.json(todoDeleteById);
})

router.put('/update/:id', async (req, res) => {
	const todoUpdateById = await Todo.updateOne( {
	receiver: "Sin Itiro Tomonaga",
	country: "Japan",
	year: 1965
})
	res.json(todoUpdateById)
})

module.exports = router
