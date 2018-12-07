require("dotenv").config();

//var axios = require("axios");

//import keys.js
var keys = require("./keys");

var fs = require("fs");


var spotify = new spotify(keys.spotify);
//arguments

   // (look at node activities 15 bank.js)

       //switch (movieVar) {
           //case "movie-this";
             //movieThis();
             //break;

        //switch (bandVar) {
           //case "concert-this";
             //concertThis();
             //break;

        //switch (spotifyVar) {
           //case "spotify-this song";
             //spotifyThisSong();
             //break;

        //switch (doVar) {
           //case "do-what-it-says";
             //doWhatItSays();
             //break;
       //}

//functions//

    // (look at node activities 17-OMDB_Axios.js & 18-OMDB_Axios)

    //axios.get("http://www.omdbapi.com/?t=" + movieVar + "&y=&plot=short&apikey=trilogy").then(
//   function(response) {
//     console.log("The movie's rating is: " + response.data.imdbRating);
//   }
// );

// `movie-this`(***FIRST***)
    // Title of the movie.
    // Year the movie came out.
    // IMDB Rating of the movie.
    // Rotten Tomatoes Rating of the movie.
    // Country where the movie was produced.
    // Language of the movie.
    // Plot of the movie.
    // Actors in the movie.
    //default

//`concert-this <artist/band name here>`(***SECOND***)
    //venue name
    //venue location
    //date of event (moment "MM/DD/YYYY")

//node-spotify-api
// `spotify-this-song`(***THIRD***)
    //artist(s)
    //song name
    //preview link of song from spotify
    //album song is from
    //default

// `do-what-it-says`(***FOURTH***)
    //run spotify-this-song from random.txt


