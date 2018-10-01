//====html front end display related JS ==============================
 // function for the anchor for possible downward page jump tab to animate down to the connect form
//  COMMENTED OUT UNTIL ISSUE IS RESOLVED 

        // $(document).ready(function){
        //     $("a.scrollLink").click(function(event){
        //       event.preventDefault();
        //       $("html.body").animate({scrollTop: $($(this).
        //         attr("href")).offset().top}, 500);
        //     })
        //   }

//   ==========end of html front end display related JS =======================

// Liri will take the following commands:
    // concert-this
    //spotifiy-this-song
    //movie-this
    //do-what-it-says

require('dotenv').config()

// this config require I believe will apply to all the APIs thus placed up here:
var datakeys = require("./assets/js/keys.js")
var fs =require("fs");
var liriReturn= process.argv[2];    //for node command input
var movieName=process.argv[3]       //for node command input
var omdb = require(keys.omdb);      
var request = require("request");
var inquierer = require("inquirer");
var space = "\n" 
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// switch for commands:
switch(liriReturn) {
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
        output = "Liri found this for you: " + 
        space + "Song Name: " + "'" + songName.toUpperCase() + "'" +
        space + "Album Name: " + data.tracks.items[0].album.name +
        space + "Artist Name: " + data.tracks.items[0].album.artists[0].name +
        space +"url: " + data.tracks.itmes[0].album.external_urls.spotify;
        console.log(output);
        writeToLog(output);
}
// ===============Spotify=======================================
function SpotifyThisSong(){
var params={ }; //not sure what to put in as the paramiters
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
//===============end of Spotify ===============================

// ===============BandsInTown=======================================
function concertThis(){

}
// ===============end of BandsInTown ===============================

// ===================OMDB=======================================
// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
function movieThis(){
var axios = require("axios")
// Then run a request to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?i=tt3896198&apikey="+ omdb).then(
  function(response) {
    console.log(response.data);
  }
)
}
// ===============end of OMDB===============================