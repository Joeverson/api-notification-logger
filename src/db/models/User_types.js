export default (sequelize, DataTypes) => {
  const UserTypes = sequelize.define('user_types', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  })

  return UserTypes
}
