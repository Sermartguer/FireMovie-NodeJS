var router = require("express").Router();
var mongoose = require("mongoose");
var Movie = mongoose.model("Movie");

/* List all movies saved */
router.get("/", function(req, res, next) {
  Movie.find()
    .then(function(movie) {
      return res.status(200).send(movie);
    })
    .catch(next);
});
/* Save Movie */
router.post("/addMovie", function(req, res, next) {
  /* Request validation */
  let movieBody = req.body;
  let { id, title, poster_path, vote } = movieBody;
  if (!id || id === "undefined" || id === "null") {
    return res.status(422).send({ message: "Id not valid" });
  }
  /* Populate schema */
  var movie = new Movie();
  movie.idMovie = id;
  movie.title = title;
  movie.poster_path = poster_path;
  movie.vote = vote;

  return movie.save(function(err, movie) {
    if (err) {
      console.log(err);
      return res.status(500).send({ message: "Fail save movie" });
    }
    return res.status(200).send({ message: "Movie save success", movie });
  });
});

/* Delete Movie */
router.delete("/removeMovie", function(req, res, next) {
  /* Request validation */
  let movieBody = req.body;
  let { _id } = movieBody;
  console.log(_id);

  if (!_id || _id === "undefined" || _id === "null") {
    return res.status(422).send({ message: "Id not valid" });
  }
  Movie.findByIdAndRemove(_id).then(function(err, movie) {
    Movie.findById(_id, function(err, movie) {
      console.log(movie); // null
      if (movie === null) {
        return res.status(200).send({ message: "Movie removed success" });
      } else {
        return res.status(500).send({ message: "Can't remove movie" });
      }
    });
  });
});
module.exports = router;
