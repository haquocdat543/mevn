const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const db = "mongodb+srv://dat:1234@cluster0.bp6tuev.mongodb.net/?retryWrites=true&w=majority"
const port = 3000

// app.get('/', (req, res) => {
//   res.header('Access-Control-Allowed-Origin',"*");
//   res.header('Access-Control-Allowed-Methods',"GET,HEAD,OPTIONS,POST,PUT,DELETE");
//   res.header('Access-Control-Allowed-Headers',"auth-token,Origin,X-Requested-With,Content-type,Accept"); 
//   next();
// })

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

// Router
const winnersRoute = require('./routes/winners.js')
app.use('/winners',winnersRoute)

//MongoDD Connect
const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
			console.log("MongoDB connected")
	} catch (error) {
		console.log(error.message)
		process.exit(1)
	}
}

connectDB()

app.listen(port, () => {
  console.log()
})


