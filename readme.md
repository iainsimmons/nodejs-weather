# Node.js Weather app

Created as an extra credit exercise for the [Node.js Basics Course](https://teamtreehouse.com/library/nodejs-basics) on [Treehouse](http://referrals.trhou.se/iainsimmons).

## Usage

First, get an API key from [Forecast.io](https://developer.forecast.io/) and the [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/intro)

Save these into a `keys.js` file in the root directory of the app and export the keys as a module like so:

```js
module.exports = {
  forecastIO: 'INSERT_YOUR_FORECAST.IO_API_KEY_HERE',
  googleGeocoding: 'INSERT_YOUR_GOOGLE_GEOCODING_API_KEY_HERE'
};
```

Then, in a command line with Node.js installed, just run:

```console
node app "ADDRESS OR LOCATION"
```

For example, for Brisbane, Australia:

```console
node app Brisbane
```

Or for the Google headquarters in California, USA:

```console
node app "1600 Amphitheatre Pkwy, Mountain View, CA 94043, United States"
```

**Note** that the app is currently set to use 'SI' units, which will respond with a temperature in Celcius.