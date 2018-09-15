export default (sequelize, DataTypes) => {
  const UserTypes = sequelize.define('user_types', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  })

  return UserTypes
}
