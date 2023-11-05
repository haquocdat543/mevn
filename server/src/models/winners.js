const mongoose = require("mongoose")
const winnersSchema = new mongoose.Schema({
	receiver: {
		type: String,
		require: true
	},
	country: String,
	year: Number
})
module.exports = mongoose.model('todo',winnersSchema)
