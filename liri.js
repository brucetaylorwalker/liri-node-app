require("dotenv").config();

//import keys.js
var fs = require("fs");
var keys = require("./keys");

//arguments

//commands//
//`concert-this <artist/band name here>`***SECOND***
    //venue name
    //venue location
    //date of event (moment "MM/DD/YYYY")

    var spotify = new spotify(keys.spotify);
//node-spotify-api
// `spotify-this-song`***THIRD***
    //artist(s)
    //song name
    //preview link of song from spotify
    //album song is from
    //default

// `movie-this`***FIRST***
    // Title of the movie.
    // Year the movie came out.
    // IMDB Rating of the movie.
    // Rotten Tomatoes Rating of the movie.
    // Country where the movie was produced.
    // Language of the movie.
    // Plot of the movie.
    // Actors in the movie.
    //default

// `do-what-it-says`***FOURTH***
    //run spotify-this-song from random.txt


