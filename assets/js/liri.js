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
var keys = require("./keys")                //pulling in keys.js... tried to call before the below info was requested
var axios = require("axios");               //axios call
var Spotify = require('node-spotify-api');  //calling spotify api 
var spotify = new Spotify(keys.spotify);    //pulling from a constructor "spotify" on keys.js (.gitignored)

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
function concertThis(artist){
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
  if (inquirerResponse.band) {
    console.log("\nYour band is: " + inquirerResponse.band);
  
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function(response) {
            console.log("=======Bands in Town DATA:========");
            console.log(artist);
            console.log("Venue name: " + response.data[i].venue.name);
            console.log("Location: " + response.data[i].venue.region);
            console.log("Date: " + response.data[i].datetime);
            console.log("================================");
        
        }
      )
  }
});
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
        console.log("==========OMDB DATA:============");
          console.log("Movie Title: " + response.data.Title);
          console.log("Release Date: " + response.data.Released);
          console.log("Rating: " + response.data.Rated);
          console.log("Rotten Toms Rating: " + response.data.Ratings[1]);
          console.log("Language: " + response.data.Language);
          console.log("Plot: " + response.data.Plot);
          console.log("Actors: " + response.data.Actors);
        console.log("================================");

        }
      )
    }
    else {
      console.log("Mr Nobody");
    }
  });
}

function doWhatItSays(){
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
            return console.log(err);
        }else{

            var dataArr=data.split(",");
            console.log(dataArr);
            // trying to just pull data from spotify this song I want it that way...not working
        switch(LiriReturn) {
                case "spotify-this-song":
                spotify.search({ type: 'track', query: "I Want It That Way" }, function(err, data) {
                    if (err) {
                        return console.log('Error occurred: ' + err);
                    } else{
                        console.log(data.tracks.items[0].href); 
                        console.log(data.tracks.items[0].album.name); 
                        console.log(data.tracks.items[0].artists[0].name); 
                    }
                })
            }
            console.log(data);
        }
    }
)}