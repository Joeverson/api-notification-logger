/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('receptor_lse', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_agencia: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING(120),
      allowNull: true
    }
  }, {
    tableName: 'receptor_lse'
  });
};
