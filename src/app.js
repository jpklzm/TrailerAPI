require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT

app.use(logger('dev'))
app.use(express.json()) 
app.use(express.urlencoded({ extended: false })) 
app.use(cors())

const trailersRouter = require('./routes/trailers')

app.use('/trailers', trailersRouter)

app.get("*", (req, res) => {
    res.send("This route is not valid, send a POST request to /trailers as mentioned in the doc");
})

if(!module.parent){
	app.listen(process.env.PORT, () =>
	  console.log(`Example app listening on port ${PORT}!`),
	);
}

module.exports = app