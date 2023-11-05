const express = require('express')
const router = express.Router()
const Winner = require('../models/winners.js')

router.get('/', async (req, res) => {
	const Winners = await Winner.find();
	res.json(Winners);
})

router.post('/new', async (req, res) => {
	const newWinner = new Winner(
	{
		receiver: "Shuji Nakamura",
		country: "Japan",
		year: 2014
	});
	const savedWinner = await newWinner.save()
	res.json(savedWinner)
})

router.get('/get/:id', async (req, res) => {
	const WinnerId = await Winner.findById( req.params.id );
	res.json(WinnerId);
})

router.delete('/delete/:id', async (req, res) => {
	const WinnerDeleteById = await Winner.findByIdAndDelete( req.params.id );
	res.json(WinnerDeleteById);
})

router.put('/update/:id', async (req, res) => {
	const WinnerUpdateById = await Winner.updateOne( {
	receiver: "Leo Esaki",
	country: "Japan",
	year: 1973
})
	res.json(WinnerUpdateById)
})

module.exports = router
