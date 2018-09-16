/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    login: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    senha: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_tipo_user: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    foto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'usuario'
  });
};
