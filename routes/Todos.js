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
		author: "Shuji Nakamura",
		contry: "Japan"
	});
	const savedTodo = await newTodo.save()
	res.json(savedTodo)
})

router.get('/get/:id', async (req, res) => {
	const todoId = await Todo.findbyId( req.params.id );
	res.json(todoId);
})

router.delete('/delete/:id', async (req, res) => {
	const todoDeleteById = await Todo.findbyIdAndDelete( req.params.id );
	res.json(todoDeleteById);
})

router.put('/update/:id', async (req, res) => {
	const todoUpdateById = await Todo.findOne( {
	author: "Leo Esaki",
	country: "Japan"
});
	res.json(todoUpdateById);
})

module.exports = router
