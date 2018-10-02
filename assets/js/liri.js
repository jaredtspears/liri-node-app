// Liri will take the following commands:
    // concert-this
    //spotifiy-this-song
    //movie-this
    //do-what-it-says

require('dotenv').config()

// this config require I believe will apply to all the APIs thus placed up here:
var fs =require("fs");                      //currently just have this down on concertThis()
var liriReturn= process.argv[2];            //for node command input
var movieName=process.argv[3]               //for node command input
var request = require("request");           //not sure where to put this "request"
var inquierer = require("inquirer");        //not sure where to install inquirer
var space = "\n"                            //just looks better for my styling of this code
var keys = require("./assets/js/keys.js")   //pulling in keys.js... tried to call before the below info was requested
var Spotify = require('node-spotify-api');  //calling spotify api 
var spotify = new Spotify(keys.spotify);    //pulling from a constructor "spotify" on keys.js (.gitignored)
var BIT = new BIT(keys.BIT);                //pulling from constructor "BIT" on keys.js (.gitignored)
var OMDB = new OMDB(keys.OMDB);             //pulling from construtor "OMBD" on keys.js (.gitignored)
// switch for commands:
switch(liriReturn) {
    case "concert-this":                
        concertThis();       
        break;
    case "spotify-this-song":
        SpotifyThisSong();
        break;
    case "movie-this":
        movieThis(movieName);                  //not sure if I put movie name here
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
    // tried to prittify the default log:
    default:
        output = "Liri found this for you: " + 
        space + "Song Name: " + "'" + songName.toUpperCase() + "'" +
        space + "Album Name: " + data.tracks.items[0].album.name +
        space + "Artist Name: " + data.tracks.items[0].album.artists[0].name +
        space +"url: " + data.tracks.itmes[0].album.external_urls.spotify;
        console.log(output);
        writeToLog(output);
}

function SpotifyThisSong(){
//var params={ };           not sure if I need this
    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }
        console.log(data); 
    });
}
/* ====not sure if I will need this but it is here: ============
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
*/

function concertThis(){

    
}
// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
function movieThis(movieName){
var axios = require("axios")
// Then run a request to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?i=tt3896198&apikey="+ omdb).then(
  function(response) {
    console.log(response.data);
  }
)
}

function doWhatItSays(){
    // not sure if this fs needs to be read here
    fs.readFile("random.txt", "utf8", function(err, /*something*/) {
        if (err) {
            return console.log(err);
        }
    })
}
