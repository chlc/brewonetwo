// Routing Setup  
// =====================================================================================

  // Dependencies
  var express = require("express");
  var db = require("../models");
  var request = require("request");
  
  // Initialize Router
  var router = express.Router();

  // Post user search result to UserResponses table
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
    // console.log("Beer Query: " + beerQuery + "\nBrewery Query: " + breweryQuery + "\nEncoded Search String: " + encodeSearchString);


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
        // console.log("Beer Name: " + actualBeerName + "\nBrewery: " + actualBrewery + "\nSRM: " + srmID);
        
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

  // Results page shows a beer from ChicagoBeers database
  router.get("/results", function(req, res) {
    // Find latest entry 
    db.UserResponses.findAll({
      limit: 1,
      order: [ ['createdAt', 'DESC']]
    })
      .then(function(userResponseData) {
        console.log(userResponseData);
        db.ChicagoBeers.findAll({
          where: {
            srmID: userResponseData[0].dataValues.srmID
          }
        })
        .then(function(dbChicagoBeer) {
          // Pick random beer that matchs SRM
          console.log("=====================");
          console.log(dbChicagoBeer);
          var randomBeer = dbChicagoBeer[Math.floor(Math.random() * dbChicagoBeer.length)];
      
          //Testing
          console.log(randomBeer);

          //Creating an object for Handlebars (beer name, brewery & SRM)
          var hbsObject = {
            beer: randomBeer.beer,
            brewery: randomBeer.brewery,
            srmID: randomBeer.srmID
          }
          // Render /results page with the selected beer
          res.render("results", hbsObject);
      });
      });
    });


  router.get("/api/userId", function(req, res) {
    // Select all items in database
    db.UserResponses.findAll({
      limit: 1,
      order: [ ['createdAt', 'DESC']]
    })
      .then(function(dbUserBeer) {
        //console.log(dbUserBeer[0].id);
        console.log(dbUserBeer[0].id);
        return dbUserBeer;
      });
  });

  // Export routes to server.js 
  module.exports = router;
