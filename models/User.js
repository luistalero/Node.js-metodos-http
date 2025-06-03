import { DataTypes } from 'sequelize'
import sequelize from '../config/db.js' // Asegúrate de que esta ruta sea correcta

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  timestamps: true
})

export default User
