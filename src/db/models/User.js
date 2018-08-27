export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    photo: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    user_type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user_types',
        key: 'id'
      }
    }
  })

  User.associate = model => {
    User.belongsTo(model.User_types, {
      foreignKey: 'user_type_id'
    })
  }

  return User
}
