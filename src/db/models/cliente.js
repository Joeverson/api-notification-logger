/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Cliente = sequelize.define('cliente', {
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
    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    telefone1: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    telefone2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    telefone3: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    endereco: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    municipio: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    uf: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    cep: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    complemento: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    cpf: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    tipo_docto_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'tipo_docto',
        key: 'id'
      }
    },
    num_docto: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    correntista: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    agencia_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'agencia',
        key: 'id'
      }
    },
    conta_corrente: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    historico: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    usuario_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'id'
      }
    }
  }, {
    tableName: 'cliente'
  });

  Cliente.associate = models => {
    Cliente.belongsTo(models.Agencia, {
      foreignKey: 'agencia_id'
    })

    Cliente.belongsTo(models.Tipo_docto, {
      foreignKey: 'tipo_docto_id'
    })    

    Cliente.belongsTo(models.Usuario, {
      foreignKey: 'usuario_id'
    })
  }
  
  return Cliente
};
