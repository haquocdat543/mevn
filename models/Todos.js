const mongoose = require("mongoose")
const TodoSchema = new mongoose.Schema({
	country: String,
	receiver: String,
	year: String
})
module.exports = mongoose.model('todo',TodoSchema)
