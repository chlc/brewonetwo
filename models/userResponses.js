// Model Setup  
// =====================================================================================

module.exports = function(sequelize, DataTypes) {
  var UserResponses = sequelize.define("UserResponses", {
    beer: DataTypes.STRING,
    brewery: DataTypes.STRING,
    srmID: DataTypes.INTEGER
  });
  return UserResponses;
};
