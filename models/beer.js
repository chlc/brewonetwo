// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Beer" model that matches up with DB
var Beer = sequelize.define("beer", {
  beer_name: {
    type: Sequelize.STRING
  },
  brewery: {
    type: Sequelize.STRING
  },
  beer_neighborhood: {
    type: Sequelize.STRING
  }
}, {
  popular: true
});

// Syncs with DB
Beer.sync();

// Makes the Beer Model available for other files (will also create a table)
module.exports = Beer;