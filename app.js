var geocoding = require('./geocoding.js'),
  weather = require("./weather"),
  address = process.argv.slice(2).join(" ");

geocoding.location(address, function(location){
  weather.get(location, address);
});