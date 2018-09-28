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

// this config require I believe will apply to all the APIs thus placed up here:
var config = require("./assets/js/config.js")
// ===============Spotify=======================================

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: config.spotify.spotifyClientID,              //you must create your own spotify API id
  secret: config.spotify.spotifyClientSecret       // you must create your own spotify API secret
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
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