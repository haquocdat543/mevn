const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
// const connectDB= require('./config/db.js')
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())

const posts = require('./routes/api/posts.js')

app.use('/api/posts',posts)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
