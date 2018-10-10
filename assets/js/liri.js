// Liri will take the following commands:
    // concert-this
    //spotifiy-this-song
    //movie-this
    //do-what-it-says

require('dotenv').config()

// this config require I believe will apply to all the APIs thus placed up here:
var fs =require("fs");                      //currently just have this down on concertThis()
var inquirer = require("inquirer");         //attempted to install inquerer on all but the do-what-it-says function for interactivity
var space = "\n"                            //just looks if I have time to add this in
var keys = require("./keys");                //pulling in keys.js... tried to call before the below info was requested
var axios = require("axios");               //axios call
var Spotify = require('node-spotify-api');  //calling spotify api 
var spotify = new Spotify(keys.spotify);    //pulling from a constructor "spotify" on keys.js (.gitignored)
var moment = require("moment");            //calling moment module
moment().format();                          //another line for using moment in node.js
//for user inputs 
var liriReturn= process.argv[2];  
  
// =======switch for commands ====================
selectedCommand(liriReturn );           //calling the below argument function
//not completed yet...
function selectedCommand(LiriReturn){
switch(LiriReturn) {
    case "concert-this":                
            concertThis();
        break;
    case "spotify-this-song":
            SpotifyThisSong();         
        break;
    case "movie-this":
        movieThis();              
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
    default:
    console.log(
    "here are the available functions for LIRI: concert-this, spotifiy-this-song, movie-this, do-what-it-says"
    )
}
}

function SpotifyThisSong(){
inquirer
  .prompt([
    {
        type: "input",
        message: "What song do you want to look up?",
        name: "song"
    },
    {
        type: "confirm",
        message: "Are you sure about this song selection?",
        name: "confirm",
        default: true
      }
  ])
  .then(function(inquirerResponse) {
    if (inquirerResponse.song) {
      spotify.search({ type: 'track', query: inquirerResponse.song }, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }
        console.log("==========Spotify DATA:============");
        console.log(data.tracks.items[0].href); 
        console.log(data.tracks.items[0].album.name); 
        console.log(data.tracks.items[0].artists[0].name); 
        console.log("================================");

    });
    }
    else {
      console.log("Africa");
    }
  });
                    
}
function concertThis(){
//need to search for name of venue, venue location, date of event using moments.js probably MM/DD/YYYY
inquirer
.prompt([
  {
      type: "input",
      message: "What band/artist do you want to look up?",
      name: "band"
  },
  {
      type: "confirm",
      message: "Are you sure about this band/artist selection?",
      name: "confirm",
      default: true
    }
])
.then(function(inquirerResponse) {
    var artist = inquirerResponse.band;              
    console.log("\nYour band is: " + inquirerResponse.band);
  
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=ea94f426-4fab-4bb1-b6ba-bd86821d522f").then(
    function(response) {
        if (!response.data.length) {
            console.log("No results found for " + artist);
            return;
        }
        console.log("Upcoming concerts for " + artist + ":");

        for (var i = 0; i < response.data.length; i++) {
            var show = response.data[i];
            console.log("");
            console.log("=======Bands in Town DATA:========");
            console.log("Your Chosen Artist: " + artist);
            console.log(show.venue.city + ", " + (show.venue.region || show.venue.country));
            console.log("Venue name: " + show.venue.name);
            console.log("Location: " + show.venue.region);
            console.log("Date: " + moment(show.datetime).format("MM/DD/YYYY"));     //moment.js is inserted here
            console.log("================================");
            console.log("");
            }
    });
})
}
function movieThis(){ 
inquirer
  .prompt([
    {
        type: "input",
        message: "What movie do you want to look up?",
        name: "movie"
    },
    {
        type: "confirm",
        message: "Are you sure about this movie selection?",
        name: "confirm",
        default: true
      }
   
  ])
  .then(function(inquirerResponse) {
    if (inquirerResponse.movie) {
      console.log("\nYour Moive is: " + inquirerResponse.movie);
      axios.get("http://www.omdbapi.com/?t=" + inquirerResponse.movie + "&y=&plot=short&apikey=" + keys.OMDB.omdbKey).then(
        function(response) {
        console.log("");  
        console.log("==========OMDB DATA:============");
          console.log("Movie Title: " + response.data.Title);
          console.log("Release Date: " + response.data.Released);
          console.log("Rating: " + response.data.Rated);
          console.log("Rotten Toms Rating: " + response.data.Ratings[1].Value);
          console.log("Language: " + response.data.Language);
          console.log("Plot: " + response.data.Plot);
          console.log("Actors: " + response.data.Actors);
        console.log("================================");
        console.log("");
        }
      )
    }
    //log Mr. Nobody if nothing is input.
    else { 
console.log(
`
==========OMDB DATA:============
Movie Title: Mr. Nobody
Release Date: 26 Sep 2013
Rating: R
Rotten Toms Rating: 67%
Language: English, Mohawk
Plot: A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible.
Actors: Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham
================================
`);
    }
  });
}

function doWhatItSays(){
    fs.readFile("random.txt", "utf8", function(err, data) {
        console.log("");
        console.log("================================");
        console.log(data);
        console.log("================================");
        console.log("");
      });
    }