require("dotenv").config();
// var fs = require("fs");
var moment = require("moment");
var axios = require("axios");
// var Spotify = require("node-spotify-api");

//import keys.js
// var keys = require("./keys.js");
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

    case "spotify-this-song":
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
    axios.get("https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp").then(
        function (response) {
            // console.log(response);

           
            // moment(response.data[0].datetime).format("MM/DD/YYYY");
            //date of event (moment "MM/DD/YYYY")
            console.log(term + " will be playing at " + response.data[0].venue.name + " in " + response.data[0].venue.city + ", " + response.data[0].venue.region + " on " + moment(response.data[0].datetime).format("MM/DD/YYYY"))


            // console.log(response.data[0].venue.name);
            // console.log(response.data[0].venue.city);
            // console.log(response.data[0].venue.region);
            // console.log(response.data[0].datetime);
        });
}

// `spotify-this-song`(***THIRD***)
//node-spotify-api

// function spotifyThisSong() {
//     spotify.search({ type: 'track', query: term }, function (err, data) {
//         if (err) {
//             return console.log('Error occurred: ' + err);
//         }
//         console.log(data);

        //artist(s)
        //song name
        //preview link of song from spotify
        //album song is from
        //default
//     });
// }

// `do-what-it-says`(***FOURTH***)
// function doWhatItSays()
    //run spotify-this-song from random.txt



