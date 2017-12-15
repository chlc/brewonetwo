// Routing Setup  
// =====================================================================================

  // Dependencies
  var express = require("express");
  var db = require("../models");
  var request = require("request");
  
  // Initialize Router
  var router = express.Router();

  // Routes
  router.get("/", function(req, res) {
  });


  router.post("/api", function(req, res) {

    // Setup Variables
    // ==========================================================

    // API key
    var authKey = "e925ad23b1f4390d1795e9ebd3911245";
    
    // Here is the form data sent via AJAX call in index.html
    var beerQuery = req.body.beerNameLC;
    var breweryQuery = req.body.breweryNameLC;
    var encodeSearchString = req.body.encodeSearchString;

    // Query URL to send to API
    var beerQueryURL = "http://api.brewerydb.com/v2/search?q=" + encodeSearchString + "&type=beer&withBreweries=Y&key=" + authKey + "&format=json"; 

    // Testing..
    console.log("Beer Query: " + beerQuery + "\nBrewery Query: " + breweryQuery + "\nEncoded Search String: " + encodeSearchString);


    // API Call
    // ==========================================================

    // Send query URL to API 
    request(beerQueryURL, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        // Get beer name, brewery, and SRM from API
        var result = JSON.parse(body).data[0];
        var actualBeerName = result.name;
        var actualBrewery = result.breweries[0].name;
        var srmID = result.srmId;

        // Testing..
        console.log("Beer Name: " + actualBeerName + "\nBrewery: " + actualBrewery + "\nSRM: " + srmID);
        
        // Save data to database table "Users"
        db.UserResponses.create({
          beer: actualBeerName,
          brewery: actualBrewery,
          srmID: srmID
        })
        .then(function(dbUserBeer) {
          res.json(dbUserBeer);
        });
      }
    });
});
  // Export routes to server.js 
  module.exports = router;
