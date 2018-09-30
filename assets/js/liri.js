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
var request = require("request");
var inquierer = require("inquirer");
var space = "\n" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"; //saw another program utilize this to save space
// ===============Spotify=======================================
var Spotify = require('node-spotify-api');

var spotify = new Spotify(
  keys.spotify
  // id: config.spotify.spotifyClientID,              //you must create your own spotify API id
  // secret: config.spotify.spotifyClientSecret       // you must create your own spotify API secret
);
 
spotify.search({ type: 'track', query: songName }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  } else {
    output = "Liri found this for you: " + 
    space + "Song Name: " + "'" + songName.toUpperCase() + "'" +
    space + "Album Name: " + data.tracks.items[0].album.name +
    space + "Artist Name: " + data.tracks.items[0].album.artists[0].name +
    space +"url: " + data.tracks.itmes[0].album.external_urls.spotify;
    console.log(output);
    writeToLog(output);
  }
 
console.log(data); 
});
/* ====not sure if I will need this but it is here: ============
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: SpotifyClientID,
  secret: SpotifyClientSecret 
});
 
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





// ===============end of BandsInTown ===============================

// ===================OMDB=======================================
// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

// Then run a request to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=4cd53ff9").then(
  function(response) {
    console.log(response.data);
  }
);




// ===============end of OMDB===============================