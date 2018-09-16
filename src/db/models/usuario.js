/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Usuario = sequelize.define('usuario', {
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
    tipo_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Tipo_user',
        key: 'id'
      }
    },
    foto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    superior_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Usuario',
        key: 'id'
      }
    }
  }, {
    tableName: 'usuario'
  });

  Usuario.associate = models => {
    Usuario.belongsTo(models.Usuario, {
      foreignKey: 'superior_id'
    })

    Usuario.belongsTo(models.Tipo_user, {
      foreignKey: 'tipo_user_id'
    })
  }

  return Usuario
};
