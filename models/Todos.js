const mongoose = require("mongoose")
const TodoSchema = new mongoose.Schema({
	country: String,
	author: String,
	year: String
})
module.exports = mongoose.model('todo',TodoSchema)
