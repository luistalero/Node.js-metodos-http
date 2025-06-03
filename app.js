const express = require('express')
const sequelize = require('./config/db')
const userRoutes = require('./pru-2/routes/userRoutes')

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/users', userRoutes)

sequelize.sync({ force: true }).then(() => {
  console.log('Database synchronized')
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
}).catch(err => {
  console.error('Unable to connect to the database:', err)
})
