const express = require('express')
const mongoose = require('mongoose')
const mongodb = require('mongodb')
const router = express.Router()
const URI = "mongodb+srv://dat:1234@cluster0.bp6tuev.mongodb.net/?retryWrites=true&w=majority"

// Get Posts
router.get('/', async (req, res) => {
	const posts = await localPostCollection();
	res.send( await posts.find({}).toArray());
})

async function localPostCollection() {
	const client = await mongoose.connect(URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
	return client.URI('vue-express').collection('posts');
}

// Add Posts

// Update Posts

// Delete Posts

module.exports = router;
