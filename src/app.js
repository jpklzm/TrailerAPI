require('dotenv').config()

const express = require('express')
const logger = require('morgan')

const app = express()
const PORT = process.env.PORT

app.use(logger('dev'))

app.use(express.json()) 
app.use(express.urlencoded({ extended: false })) 

const trailersRouter = require('./routes/trailers')

app.use('/trailers', trailersRouter)

if(!module.parent){
	app.listen(process.env.PORT, () =>
	  console.log(`Example app listening on port ${PORT}!`),
	);
}

module.exports = app