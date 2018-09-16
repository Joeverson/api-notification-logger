/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario_agencia', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_usuario: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_agencia: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'usuario_agencia'
  });
};
