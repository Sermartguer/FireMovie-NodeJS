var router = require("express").Router();
var mongoose = require("mongoose");
var Movie = mongoose.model("Movie");

// return a list of tags
router.get("/", function(req, res, next) {
  Movie.findOne()
    .then(function(movie) {
      console.log(movie);
      return movie;
    })
    .catch(next);
});

router.get("/addMovie", function(req, res, next) {
  var movie = new Movie();
  movie.title = "sample";
  movie.poster_path = "sample";
  movie.overview = "sample";
  movie.vote = "sample";
  console.log(movie);
  return movie.save().then(function(movie) {
    console.log(movie);
    return res.json(movie);
  });
});
module.exports = router;
