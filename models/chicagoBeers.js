// Model Setup  
// =====================================================================================

module.exports = function(sequelize, DataTypes) {
  var ChicagoBeers = sequelize.define("ChicagoBeers", {
    beer_name: DataTypes.STRING,
    brewery: DataTypes.STRING,
    ibu: DataTypes.INTEGER
  });
  return ChicagoBeers;
};
