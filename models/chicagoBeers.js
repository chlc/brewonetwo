// Model Setup  
// =====================================================================================

module.exports = function(sequelize, DataTypes) {
  var ChicagoBeers = sequelize.define("ChicagoBeers", {
    beer: DataTypes.STRING,
    brewery: DataTypes.STRING,
    srmID: DataTypes.INTEGER
  });
  return ChicagoBeers;
};
