// Beer-One-Two
// =====================================================================================

  // Setup  
  // =====================================================================================

    // Dependencies
    var express = require("express");
	var bodyParser = require("body-parser");
	var exphbs = require('express-handlebars');
	var methodOverride = require('method-override');
	var db = require("./models");

	// Initialize Express
	var app = express();

	// Port Config
    var PORT = process.env.PORT || 3000;

	// App Middleware
	app.use(methodOverride('_method'));
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use(express.static(process.cwd() + "/public"));
	app.use(bodyParser.text());
	app.use(bodyParser.json({ type: "application/vnd.api+json" }));

	// Handlebars Config
	app.engine("handlebars", exphbs({ defaultLayout: "main" }));
	app.set("view engine", "handlebars");

	// Routes
	// =============================================================
	var routes = require("./controllers/beers_controller.js");
	app.use("/", routes);
	app.use("/api", routes);
	app.use("/results", routes);

	// Starting our Express app
	// =============================================================
	db.sequelize.sync().then(function() {
		app.listen(PORT, function() {
	  		console.log("App listening on PORT " + PORT);
		});
	})

//module.exports = app;