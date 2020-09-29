const express = require('express')
const router = express.Router()
const controller = require("../controllers/TrailerController");

router.post('/', controller.getMovieTrailer);

module.exports = router