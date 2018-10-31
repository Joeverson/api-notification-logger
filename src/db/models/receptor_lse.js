/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const ReceptorLse = sequelize.define('receptor_lse', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    agencia_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'agencia',
        key: 'id'
      }
    },
    nome: {
      type: DataTypes.STRING(120),
      allowNull: true
    }
  }, {
    tableName: 'receptor_lse'
  });

  ReceptorLse.associate = models => {
    ReceptorLse.belongsTo(models.Agencia, {
      foreignKey: 'agencia_id'
    })
  }

  return ReceptorLse
};
