const mongoose = require("mongoose")
const TodoSchema = new mongoose.Schema({
	receiver: String,
	country: String,
	year: String
})
module.exports = mongoose.model('todo',TodoSchema)
