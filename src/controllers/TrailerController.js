'use strict';

const axios = require("axios");
const API_KEY = process.env.TMDB_SECRET_KEY;

class TrailerController {
    constructor() { }

    getMovieTrailer(req, res) {
        axios.get(req.body.url)
            .then((movie) => {
                const id = movie.data._embedded['viaplay:blocks'][0]._embedded['viaplay:product'].content.imdb.id;

                axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US&external_source=imdb_id`)
                    .then((response) => {
                        res.status(200).json({
                            trailer_url: `https://www.youtube.com/watch?v=${response.data.results[0].key}`
                        });
                    }).catch(() => {
                        res.status(404).json({
                            error_message: "Something went wrong. Make sure you sent a valid movie url."
                        });
                    });
            }).catch(() => {
                res.status(404).json({
                    error_message: "Something went wrong. Make sure you sent a valid movie url."
                });
            });
    }
}

module.exports = TrailerController.prototype;