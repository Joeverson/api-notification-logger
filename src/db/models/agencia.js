/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agencia', {
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
    gerente: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    agenciacol: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    id_regional: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_supervisao: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'agencia'
  });
};
