/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo_user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tipo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    areas_permitidas: {
      type: DataTypes.STRING(120),
      allowNull: true
    }
  }, {
    tableName: 'tipo_user'
  });
};
