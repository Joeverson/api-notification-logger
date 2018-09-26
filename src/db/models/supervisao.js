/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('supervisao', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    supervisor: {
      type: DataTypes.STRING(120),
      allowNull: true
    }
  }, {
    tableName: 'supervisao'
  });
};
