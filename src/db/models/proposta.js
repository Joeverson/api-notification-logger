/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Proposta = sequelize.define('proposta', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_cliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'cliente',
        key: 'id'
      }
    },
    receptor_lse_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'receptor_lse',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'status',
        key: 'id'
      }
    },
    data_captacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_entrega_receptor: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_limite_resposta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_fim: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    historico: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'proposta'
  });

  Proposta.associate = models => {
    Proposta.belongsTo(models.Cliente, {
      foreignKey: 'cliente_id'
    })

    Proposta.belongsTo(models.Receptor_lse, {
      foreignKey: 'receptor_lse_id'
    })

    Proposta.belongsTo(models.Status, {
      foreignKey: 'Status_id'
    })
  }

  return Proposta
};
