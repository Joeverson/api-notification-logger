/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proposta', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_cliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_agencia: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_receptor_lse: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
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
};
