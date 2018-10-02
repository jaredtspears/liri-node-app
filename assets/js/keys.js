// spotify export:
console.log("this is loaded");

exports.spotify = {
    id: process.env.SPOTIFY_ID, //spotify_id must be CAPITALIZED
    secret: process.env.SPOTIFY_SECRET
  };

//Bands in Town export
exports.BIT = {
    BITappID: process.env.BIT_APP_ID
}

//OMDB export:
exports.OMDB = {
    omdbKey: process.env.OMDB_KEY
}
