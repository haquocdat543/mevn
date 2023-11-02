const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('express')
const app = express()
const port = 3000
const URI = "mongodb+srv://dat:1234@cluster0.bp6tuev.mongodb.net/?retryWrites=true&w=majority"

app.get('/', (req, res) => {
  res.header('Access-Control-Allowed-Origin',"*");
  res.header('Access-Control-Allowed-Methods',"GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header('Access-Control-Allowed-Headers',"auth-token,Origin,X-Requested-With,Content-type,Accept"); 
})

mongoose.connect(URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => {
	console.log("mongodb connected")
})
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(bodyParser.json())
const todosRoute = require("./routes/Todos")
app.use('/todos',todosRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
