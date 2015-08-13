var https = require('https'),
    keys = require('./keys.js'),
    printer = require('./printer.js');

function getLatLngsFromAddress(address, callback) {
  var request = https.get(
    "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(address) + "&key=" + keys.googleGeocoding,
    function(response) {
      var body = "";
      // Read the data
      response.on("data", function(chunk) {
        body += chunk;
      });
      response.on("end", function(){
        if (response.statusCode === 200) {
          // Parse the data
          try {
            var result = JSON.parse(body).results[0];
            // Return the location object to the callback function
            callback(result.geometry.location);
          } catch (error) {
            // Print error
            printer.printError({message: "There was an error parsing the JSON data."});
          }
        } else {
          // Status Code Error
          printer.printError({message: "There was an error getting the latitude and longitude for " + address + ". (" + response.statusCode + ")"});
        }
      });
  });
  // Connection error
  request.on("error", function(error){
    printer.printError({message: "There was an error connecting to the URL:\n" + request.path + "\nPlease fix the URL and try again."});
  });
}

module.exports.location = getLatLngsFromAddress;