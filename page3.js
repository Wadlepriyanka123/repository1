var GoogleLocations = require('google-locations');
 
var locations = new GoogleLocations('YOUR_API_KEY');
 
locations.search({keyword: 'Google', location: [37.42291810, -122.08542120]}, function(err, response) {
  console.log("search: ", response.results);
 
  locations.details({placeid: response.results[0].place_id}, function(err, response) {
    console.log("search details: ", response.result.name);
    // search details: Google
  });
});