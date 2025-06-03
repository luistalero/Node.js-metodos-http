import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('prueba', 'luistalero', 'campus2023', {
// const sequelize = new Sequelize('databases', 'user-de-db', 'password-db', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
})

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida exitosamente.')
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err)
  })

export default sequelize
