/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Agencia = sequelize.define('agencia', {
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
    regional_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'regional',
        key: 'id'
      }
    },
    supervisao_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'supervisao',
        key: 'id'
      }
    }
  }, {
    tableName: 'agencia'
  });

  Agencia.associate = models => {
    Agencia.belongsTo(models.Regional, {
      foreignKey: 'regional_id'
    })

    Agencia.belongsTo(models.Supervisao, {
      foreignKey: 'supervisao_id'
    })
  }

  return Agencia
};
