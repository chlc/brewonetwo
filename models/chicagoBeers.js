// Model Setup  
// =====================================================================================

module.exports = function(sequelize, DataTypes) {
  var ChicagoBeers = sequelize.define("ChicagoBeers", {
    beer_name: DataTypes.STRING,
    brewery: DataTypes.STRING,
    location_name: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    website: DataTypes.STRING,
    abv: DataTypes.INTEGER,
    ibu: DataTypes.INTEGER,
    srmID: DataTypes.INTEGER,
    srmHex: DataTypes.STRING
  });
  return ChicagoBeers;
};

 