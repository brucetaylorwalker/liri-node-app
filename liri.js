require("dotenv").config();
// var moment = require("moment");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var fs = require("fs");
//import keys.js
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

//arguments
var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

// (look at node activities 15 bank.js)
switch (search) {
    case "movie-this":
        movieThis();
        break;

    case "concert-this":
        concertThis();
        break;

    case "spotify-this song":
        spotifyThisSong();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;
}

//functions//

// `movie-this`(***FIRST***)
// (look at node activities 17-OMDB_Axios.js & 18-OMDB_Axios)
function movieThis() {
    axios.get("http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            console.log("Everything you ever wanted to know about " + response.data.Title + ":")
            console.log("Plot: " + response.data.Plot)
            console.log(response.data.Title + " came out in " + response.data.Year + " and is rated " + response.data.Rated + ".");
            console.log("It stars " + response.data.Actors)
            console.log("Imdb gives it a " + response.data.imdbRating + " and Rotten Tomatoes gives it a " + response.data.Ratings[1].Value)
            // console.log(response.data);

            //default
        });
}

//`concert-this <artist/band name here>`(***SECOND***)
function concertThis() {
    
}
    //venue name
    //venue location
    //date of event (moment "MM/DD/YYYY")

 //   axios.get("https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp").then(
//   function(response) {

//}



//node-spotify-api
// `spotify-this-song`(***THIRD***)
    //artist(s)
    //song name
    //preview link of song from spotify
    //album song is from
    //default

// `do-what-it-says`(***FOURTH***)
    //run spotify-this-song from random.txt



