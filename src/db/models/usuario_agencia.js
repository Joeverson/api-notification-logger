/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Usuario_agencia = sequelize.define('usuario_agencia', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    usuario_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    agencia_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'agencia',
        key: 'id'
      }
    }
  }, {
    tableName: 'usuario_agencia'
  });

  Usuario_agencia.associate = models => {
    Usuario_agencia.belongsTo(models.Usuario, {
      foreignKey: 'usuario_id'
    })

    Usuario_agencia.belongsTo(models.Agencia, {
      foreignKey: 'agencia_id'
    })
  }

  return Usuario_agencia
};
