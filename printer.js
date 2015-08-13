// Print out message
function printMessage(address, temp) {
  var message = "The current temperature in degrees Celcius at " + address + " is " + temp;
  console.log(message);
}

// Print out error messages
function printError(error) {
  console.error(error.message);
}

module.exports = {
  printMessage: printMessage,
  printError: printError
};