/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('areas', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(120),
      allowNull: true
    }
  }, {
    tableName: 'areas'
  });
};
