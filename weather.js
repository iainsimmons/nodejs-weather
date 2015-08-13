var https = require('https'),
    keys = require('./keys.js'),
    printer = require('./printer.js');

function getWeatherForAddress(location, address) {
  var request = https.get(
    "https://api.forecast.io/forecast/" + keys.forecastIO + "/" + location.lat + "," + location.lng + "?units=si",
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
            var currently = JSON.parse(body).currently;
            // Print the data
            printer.printMessage(address, currently.temperature);
          } catch (error) {
            // Print error
            printer.printError({message: "There was an error parsing the JSON data."});
          }
        } else {
          // Status Code Error
          printer.printError({message: "There was an error getting the weather for the address at " + address + ". (" + response.statusCode + ")"});
        }
      });
  });
  // Connection error
  request.on("error", function(error){
    printer.printError({message: "There was an error connecting to the URL:\n" + request.path + "\nPlease fix the URL and try again."});
  });
}

module.exports.get = getWeatherForAddress;