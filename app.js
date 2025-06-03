import express, { json } from 'express'
import userRoutes from './routes/userRoutes.js'
import define from './config/db.js'

const app = express()
const PORT = 3001

app.use(json())

app.use('/users', userRoutes)

// Sincronizar la base de datos y arrancar el servidor
define.sync({ force: false }) // Cambia a `force: true` solo si quieres sobrescribir tablas existentes
  .then(() => {
    console.log('Database synchronized')
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`)
    })
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })
